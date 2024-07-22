package potato.potaton.backend.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import potato.potaton.backend.domain.JobSeekerEntity;
import potato.potaton.backend.dto.JobSeekerDto;
import potato.potaton.backend.exception.CustomException;
import potato.potaton.backend.service.JobSeekerService;

import java.util.List;

@RestController
@RequestMapping("/api/jobseeker")
@RequiredArgsConstructor
public class JobSeekerController {

    private final JobSeekerService jobSeekerService;

    // 구직자 등록
    @PostMapping
    public ResponseEntity<JobSeekerEntity> createJobSeeker(@RequestBody JobSeekerDto.JobSeekerRequestDto requestDto) {
        JobSeekerEntity createdJobSeeker = jobSeekerService.createJobSeeker(requestDto);
        return ResponseEntity.ok(createdJobSeeker);
    }

    // 구직자 조회
    @GetMapping("/{id}")
    public ResponseEntity<JobSeekerEntity> getJobSeekerById(@PathVariable Long id) {
        JobSeekerEntity jobSeeker = jobSeekerService.getJobSeekerById(id);
        return ResponseEntity.ok(jobSeeker);
    }

    // 모든 구직자 조회
    @GetMapping
    public ResponseEntity<List<JobSeekerEntity>> getAllJobSeekers() {
        List<JobSeekerEntity> jobSeekers = jobSeekerService.getAllJobSeekers();
        return ResponseEntity.ok(jobSeekers);
    }

    // 구직자 업데이트
    @PutMapping("/{id}")
    public ResponseEntity<JobSeekerEntity> updateJobSeeker(@PathVariable Long id, @RequestBody JobSeekerDto.JobSeekerRequestDto requestDto) {
        JobSeekerEntity updatedJobSeeker = jobSeekerService.updateJobSeeker(id, requestDto);
        return ResponseEntity.ok(updatedJobSeeker);
    }

    // 구직자 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobSeeker(@PathVariable Long id) {
        jobSeekerService.deleteJobSeeker(id);
        return ResponseEntity.noContent().build();
    }

    // 구직자 회원가입
    @PostMapping("/register")
    public ResponseEntity<String> registerJobSeeker(@RequestBody JobSeekerDto.JobSeekerRequestDto requestDto) {
        String token = jobSeekerService.signUpAndGenerateToken(requestDto);
        return ResponseEntity.ok(token);
    }

    // 구직자 로그인
    @PostMapping("/login")
    public ResponseEntity<String> loginJobSeeker(@RequestBody JobSeekerDto.JobSeekerRequestDto requestDto) {
        try {
            String token = jobSeekerService.loginAndGenerateToken(requestDto);
            return ResponseEntity.ok(token);
        } catch (CustomException e) {
            String errorMessage = e.getMessage();

            HttpStatus httpStatus;
            if (errorMessage.contains("잘못된 로그인입니다.")) {
                httpStatus = HttpStatus.UNAUTHORIZED; //로그인 실패 시 UNAUTHORIZED
            } else if (errorMessage.contains("중복 이메일")) {
                httpStatus = HttpStatus.CONFLICT; //이메일 중복 시 CONFLICT
            } else {
                httpStatus = HttpStatus.INTERNAL_SERVER_ERROR; // 기타 오류는 INTERNAL_SERVER_ERROR
            }

            return ResponseEntity.status(httpStatus).body(errorMessage);
        }
    }
}
