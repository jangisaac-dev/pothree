package potato.potaton.backend.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import potato.potaton.backend.domain.JobSeekerEntity;
import potato.potaton.backend.dto.JobSeekerDto;
import potato.potaton.backend.service.JobSeekerService;

import java.util.List;

@RestController
@RequestMapping("/api/jobseeker")
@RequiredArgsConstructor
public class JobSeekerController {

    private final JobSeekerService jobSeekerService;
    //구직자
    //등록
    @PostMapping
    public ResponseEntity<JobSeekerEntity> createJobSeeker(@RequestBody JobSeekerDto.JobSeekerRequestDto requestDto) {
        JobSeekerEntity createdJobSeeker = jobSeekerService.createJobSeeker(requestDto);
        return ResponseEntity.ok(createdJobSeeker);
    }

    //조회
    @GetMapping("/{id}")
    public ResponseEntity<JobSeekerEntity> getJobSeekerById(@PathVariable Long id) {
        JobSeekerEntity jobSeeker = jobSeekerService.getJobSeekerById(id);
        return ResponseEntity.ok(jobSeeker);
    }

    //모두 조회
    @GetMapping
    public ResponseEntity<List<JobSeekerEntity>> getAllJobSeekers() {
        List<JobSeekerEntity> jobSeekers = jobSeekerService.getAllJobSeekers();
        return ResponseEntity.ok(jobSeekers);
    }

    //업데이트
    @PutMapping("/{id}")
    public ResponseEntity<JobSeekerEntity> updateJobSeeker(@PathVariable Long id, @RequestBody JobSeekerDto.JobSeekerRequestDto requestDto) {
        JobSeekerEntity updatedJobSeeker = jobSeekerService.updateJobSeeker(id, requestDto);
        return ResponseEntity.ok(updatedJobSeeker);
    }

    //삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobSeeker(@PathVariable Long id) {
        jobSeekerService.deleteJobSeeker(id);
        return ResponseEntity.noContent().build();
    }
}

