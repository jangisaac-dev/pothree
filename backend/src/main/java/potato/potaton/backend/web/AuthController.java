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
import potato.potaton.backend.dto.SignUpDto;
import potato.potaton.backend.service.UserService;
import potato.potaton.backend.util.JwtTokenProvider;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final JwtTokenProvider tokenProvider;

    @PostMapping("/kakao")
    public ResponseEntity<String> authenticateWithKakao(@RequestParam String kakaoKey) {
        try {
            //카카오 키로 사용자 조회
            UserEntity user = userService.loadUserByKakaoKey(kakaoKey);
            //사용자 존재 시 토큰 생성
            String token = tokenProvider.createAccessToken(user.getId());
            return ResponseEntity.ok(token);
        } catch (NotFoundException e) {
            //사용자 정보가 없으면 새로운 사용자 생성
            SignUpDto.SignUpRequest signUpRequest = SignUpDto.SignUpRequest.builder()
                    .email("kakao" + kakaoKey)
                    .build();

            UserEntity newUser = userService.signUp(signUpRequest);
            //새로운 사용자 토큰 생성
            String token = tokenProvider.createAccessToken(newUser.getId());
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            //인증 오류 시 에러 메시지 반환
            log.error("Kakao 인증 중 오류 발생: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("오류: " + e.getMessage());
        }
    }
}
