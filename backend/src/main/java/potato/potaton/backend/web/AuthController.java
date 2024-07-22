package potato.potaton.backend.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.webjars.NotFoundException;
import potato.potaton.backend.domain.UserEntity;
import potato.potaton.backend.dto.AuthResponse;
import potato.potaton.backend.dto.SignUpDto;
import potato.potaton.backend.service.UserService;
import potato.potaton.backend.util.JwtTokenProvider;

@Slf4j
@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final JwtTokenProvider tokenProvider;

    @PostMapping("/kakao")
    public ResponseEntity<AuthResponse> authenticateWithKakao(@RequestParam String kakaoKey) {
        try {
            UserEntity user = userService.loadUserByKakaoKey(kakaoKey);
            String token = tokenProvider.createAccessToken(user.getId());
            return ResponseEntity.ok(new AuthResponse(token));
        } catch (NotFoundException e) {
            // 3. 사용자 정보가 없으면 새로운 사용자 생성
            SignUpDto.SignUpRequest signUpRequest = SignUpDto.SignUpRequest.builder()
                    .email("kakao" + kakaoKey )
                    .build();

            UserEntity newUser = userService.signUp(signUpRequest);
            // 새로운 사용자 토근 생성
            String token = tokenProvider.createAccessToken(newUser.getId());
            return ResponseEntity.ok(new AuthResponse(token));
        } catch (Exception e) {
            // 인증 오류시 에러코드 반환
            log.error("Kakao 인증 중 오류 발생: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body(new AuthResponse("오류: " + e.getMessage()));
        }
    }
}
