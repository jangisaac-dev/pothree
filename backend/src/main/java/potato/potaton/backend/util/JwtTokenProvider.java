package potato.potaton.backend.util;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.binary.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import potato.potaton.backend.dto.JwtTokenDto;
import potato.potaton.backend.service.UserService;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;


@Component
@RequiredArgsConstructor
@Slf4j
public class JwtTokenProvider {

    @Value("${jwt.secretKey}")
    private String secretKey;

    @Value("${jwt.accessExpiration}")
    private long accessTokenValidTime;

    @Value("${jwt.refreshExpiration}")
    private long refreshTokenValidTime;

    @Value("${jwt.aesKey}")
    private String aesKey;

    private final String USER_KEY = "USER_ID";

    private String decodeBase64(String data) {
        byte[] bytes = new org.apache.commons.codec.binary.Base64().decode(StringUtils.getBytesUtf8(data));
        return new String(bytes);
    }

    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(this.secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public JwtTokenDto issueToken(Long id) {
        return new JwtTokenDto(createAccessToken(id), createRefreshToken(id));
    }

    public String createAccessToken(Long id) {
        try {
            return this.createToken(id, accessTokenValidTime);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public String createRefreshToken(Long id) {
        try {
            return this.createToken(id, refreshTokenValidTime);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public JwtTokenDto createToken(Long id) {
        return new JwtTokenDto(
                createAccessToken(id),
                createRefreshToken(id)
        );
    }

    private String createToken(Long id, long tokenValid) throws Exception {
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty(USER_KEY, id);

        Claims claims = Jwts.claims().subject(encrypt(jsonObject.toString())).build();

        Date date = new Date();

        return Jwts.builder()
                .claims(claims)
                .issuedAt(date)
                .expiration(new Date(date.getTime() + tokenValid))
                .signWith(getSigningKey())
                .compact();
    }

    private String encrypt(String plainToken) throws Exception {
        SecretKeySpec secretKeySpec = new SecretKeySpec(aesKey.getBytes(StandardCharsets.UTF_8), "AES");
        IvParameterSpec IV = new IvParameterSpec(aesKey.substring(0, 16).getBytes());

        Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
        c.init(Cipher.ENCRYPT_MODE, secretKeySpec, IV);

        byte[] encryptionByte = c.doFinal(plainToken.getBytes(StandardCharsets.UTF_8));

        return Hex.encodeHexString(encryptionByte);
    }

    private String decrypt(String encodeText) throws Exception {
        SecretKeySpec secretKeySpec = new SecretKeySpec(aesKey.getBytes(StandardCharsets.UTF_8), "AES");
        IvParameterSpec IV = new IvParameterSpec(aesKey.substring(0, 16).getBytes());

        Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
        c.init(Cipher.DECRYPT_MODE, secretKeySpec, IV);

        byte[] decodeByte = Hex.decodeHex(encodeText);

        return new String(c.doFinal(decodeByte), StandardCharsets.UTF_8);

    }

    public Long extractId(String token) throws Exception {
        if (!validateToken(token)) {
            throw new IllegalAccessException();
        }
        JsonElement id = extraValue(token).get(USER_KEY);
        return id.getAsLong();
    }


    private JsonObject extraValue(String token) throws Exception {
        String subject = extractAllClaims(token).getSubject();
        String decrypted = decrypt(subject);
        JsonObject jsonObject = new Gson().fromJson(decrypted, JsonObject.class);
        return jsonObject;
    }

    private JsonElement extraValue(String token, String key) throws Exception {
        JsonObject object = extraValue(token);
        return object.get(key);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(this.getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }


    public String extractTokenType(String token) throws Exception {
        JsonElement tokenType = extraValue(token).get("tokenType");
        return String.valueOf(tokenType);
    }

    public String resolveAccessToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return request.getHeader("authorization").substring(7);
        }
        return null;
    }

    public String resolveRefreshToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("refreshToken");
        if (request.getHeader("refreshToken") != null)
            return request.getHeader("refreshToken").substring(7);
        return null;
    }

    public boolean validateRefreshToken(String refreshToken) {
        try {
            Claims claims = extractAllClaims(refreshToken);
            return !claims.getExpiration().before(new Date());
        } catch (MalformedJwtException e) {
            throw new MalformedJwtException("Invalid JWT token");
//        } catch (ExpiredJwtException e) {
//            throw new ExpiredRefreshTokenException("1006", ErrorCode.EXPIRED_REFRESH_TOKEN);
        } catch (UnsupportedJwtException ex) {
            throw new UnsupportedJwtException("JWT token is unsupported");
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("JWT claims string is empty");
        }
    }

    public boolean validateToken(String token) {
        try {
            Claims claims = extractAllClaims(token);
            return !claims.getExpiration().before(new Date());
        } catch (MalformedJwtException e) {
            throw new MalformedJwtException("Invalid JWT token");
        } catch (ExpiredJwtException e) {
            throw new ExpiredJwtException(null, null, "Token is Expired");
        } catch (UnsupportedJwtException ex) {
            throw new UnsupportedJwtException("JWT token is unsupported");
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("JWT claims string is empty");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

//    public String reissueAccessToken(String refreshToken, HttpServletResponse response) {
//        try {
//            this.validateRefreshToken(refreshToken);
//            Long id = findUserIdByToken(refreshToken);
//            Optional<UserEntity> user = userRepository.findById(id);
//            return createAccessToken(id, String.valueOf(user.get().getUserRole()));
//        } catch (ExpiredJwtException e) {
//            response.setStatus(HttpStatus.UNAUTHORIZED.value());
//            return ErrorCode.EXPIRED_ACCESS_TOKEN.getMessage();
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//    public Long findUserIdByToken(String token) throws Exception {
//        String accessTokenType = extractTokenType(token);
//
//        if ("access".equals(accessTokenType)) {
//            throw new UnAuthorizedException("AccessToken은 사용 할 수 없습니다.", ErrorCode.ACCESS_DENIED_EXCEPTION);
//        }
//
//        return token == null ? null : userRepository.findById(extractId(token))
//                .orElseThrow(() -> new NotFoundException("토큰에 해당하는 ID값을 찾을 수 없습니다.", ErrorCode.NOT_FOUND_EXCEPTION)).getId();
//    }
//
//    public Optional<UserEntity> extractIdByRequest(HttpServletRequest request) throws Exception {
//        String userToken = resolveAccessToken(request);
//        Long tokenId = extractId(userToken);
//        return userRepository.findById(tokenId);
//    }
}

