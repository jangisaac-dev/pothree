package potato.potaton.backend.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;
import potato.potaton.backend.domain.MatchingEntity;
import potato.potaton.backend.domain.UserEntity;
import potato.potaton.backend.dto.MatchingRequestDto;
import potato.potaton.backend.dto.NormalSignUpDto;
import potato.potaton.backend.dto.SeekerSignUpDto;
import potato.potaton.backend.service.MatchingService;
import potato.potaton.backend.service.UserService;
import potato.potaton.backend.util.JwtTokenProvider;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/matching")
@RequiredArgsConstructor
public class MatchingController {
    private final MatchingService matchingService;
    private final JwtTokenProvider tokenProvider;

    @PostMapping("/list")
    public ResponseEntity<List<MatchingEntity>> getMyRequester(@RequestParam String token) {
        try {
            Long id = tokenProvider.extractId(token);

            return ResponseEntity.ok(matchingService.findForSelf(id));
        } catch (Exception e) {
            e.printStackTrace();
            throw new NotFoundException("없는 사용자입니다.");
        }
    }

    @PostMapping("/save")
    public ResponseEntity<MatchingEntity> signUpSeeker(@RequestParam MatchingRequestDto model) {
        try {
            return ResponseEntity.ok(matchingService.save(
                    new MatchingEntity(null, model.getRequestId(), model.getEndPointId())
            ));
        } catch (Exception e) {
            //인증 오류 시 에러 메시지 반환
            e.printStackTrace();
            throw e;
        }
    }
}
