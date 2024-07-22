package potato.potaton.backend.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import potato.potaton.backend.domain.JobPostingEntity;
import potato.potaton.backend.dto.JobPostingDto;
import potato.potaton.backend.service.JobPostingService;

import java.util.List;

@RestController
@RequestMapping("/jobposting")
@RequiredArgsConstructor
public class JobPostingController {

    private final JobPostingService jobPostingService;
    //구인자
    //모두 생성
    @PostMapping
    public ResponseEntity<JobPostingEntity> createJobPosting(@RequestBody JobPostingDto.JobPostingRequestDto requestDto) {
        JobPostingEntity createdJobPosting = jobPostingService.createJobPosting(requestDto);
        return ResponseEntity.ok(createdJobPosting);
    }

    //조회
    @GetMapping("/{id}")
    public ResponseEntity<JobPostingEntity> getJobPostingById(@PathVariable Long id) {
        JobPostingEntity jobPosting = jobPostingService.getJobPostingById(id);
        return ResponseEntity.ok(jobPosting);
    }

    //조회
    @GetMapping
    public ResponseEntity<List<JobPostingEntity>> getAllJobPostings() {
        List<JobPostingEntity> jobPostings = jobPostingService.getAllJobPostings();
        return ResponseEntity.ok(jobPostings);
    }

    //업데이트
    @PutMapping("/{id}")
    public ResponseEntity<JobPostingEntity> updateJobPosting(@PathVariable Long id, @RequestBody JobPostingDto.JobPostingRequestDto requestDto) {
        JobPostingEntity updatedJobPosting = jobPostingService.updateJobPosting(id, requestDto);
        return ResponseEntity.ok(updatedJobPosting);
    }

    //삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobPosting(@PathVariable Long id) {
        jobPostingService.deleteJobPosting(id);
        return ResponseEntity.noContent().build();
    }
}
