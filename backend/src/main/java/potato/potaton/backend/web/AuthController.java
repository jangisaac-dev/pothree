package potato.potaton.backend.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;
import potato.potaton.backend.domain.UserEntity;
import potato.potaton.backend.dto.NormalSignUpDto;
import potato.potaton.backend.dto.SeekerSignUpDto;
import potato.potaton.backend.dto.UserUpdateDto;
import potato.potaton.backend.service.UserService;
import potato.potaton.backend.util.JwtTokenProvider;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<String> authenticateWithKakao(@RequestParam String kakaoKey) {
        try {
            //카카오 키로 사용자 조회
            UserEntity user = userService.loadUserByKakaoKey(kakaoKey);
            //사용자 존재 시 토큰 생성
            String token = tokenProvider.createAccessToken(user.getId());
            return ResponseEntity.ok(token);
        } catch (NotFoundException e) {
            //사용자 정보를 찾을 수 없으면 적절한 오류 메시지 반환
            log.error("사용자 정보를 찾을 수 없습니다: kakaoKey= {}", kakaoKey);
            return ResponseEntity.status(404).body("사용자 정보를 찾을 수 없습니다.");
        } catch (Exception e) {
            //인증 오류 시 에러 메시지 반환
            log.error("Kakao 인증 중 오류 발생: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("오류: " + e.getMessage());
        }
    }

    @PostMapping("/signUpSeeker")
    public ResponseEntity<String> signUpSeeker(@RequestBody SeekerSignUpDto seeker) {
        try {
            UserEntity user = userService.signUp(
                    UserEntity.builder()
                            .role("T")
                            .phone(seeker.getPhone())
                            .sex(seeker.getSex())
                            .birth(seeker.getBirth())
                            .kakaoKey(seeker.getKakaoKey())
                            .yoyangImage(seeker.getImage())
                            .build()
            );
            String token = tokenProvider.createAccessToken(user.getId());
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            //인증 오류 시 에러 메시지 반환
            log.error("회원가입 중 오류 발생: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("오류: " + e.getMessage());
        }
    }

    @PostMapping("/signUpUser")
    public ResponseEntity<String> signUpUser(@RequestBody NormalSignUpDto normalUser) {
        try {
            UserEntity user = userService.signUp(
                    UserEntity.builder()
                            .role("T")
                            .phone(normalUser.getPhone())
                            .sex(normalUser.getSex())
                            .birth(normalUser.getBirth())
                            .kakaoKey(normalUser.getKakaoKey())
                            .yoyangRole(normalUser.getYoyangRole())
                            .build()
            );

            //사용자 존재 시 토큰 생성
            String token = tokenProvider.createAccessToken(user.getId());
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            //인증 오류 시 에러 메시지 반환
            log.error("회원가입 중 오류 발생: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("오류: " + e.getMessage());
        }
    }


    @GetMapping("/myPage")
    public ResponseEntity<UserEntity> mypage(@RequestParam("model") UserUpdateDto dto) {
        if (!tokenProvider.validateToken(dto.getToken())) {
            throw new NotFoundException("Not found Token");
        }
        return ResponseEntity.ok(userService.update(dto));
    }
}
