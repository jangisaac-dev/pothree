package potato.potaton.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import potato.potaton.backend.exception.CustomException;
import potato.potaton.backend.type.ErrorCode;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class JobPostingService {

    private final JobPostingRepository jobPostingRepository;

     //구인자를 새로 등록하는 메서드입니다.

    @Transactional
    public JobPostingEntity createJobPosting(JobPostingDto.JobPostingRequestDto request) {
        JobPostingEntity jobPostingEntity = JobPostingEntity.builder()
                .email(request.getEmail())
                .name(request.getName())
                .address(request.getAddress())
                .experience(request.getExperience())
                .phoneNumber(request.getPhoneNumber())
                .build();

        return jobPostingRepository.save(jobPostingEntity);
    }

     // ID로 구인자 정보를 조회하는 메서드입니다.

    @Transactional
    public JobPostingEntity getJobPostingById(Long id) {
        return jobPostingRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }

     //모든 구인자 정보를 조회하는 메서드입니다.

    @Transactional(readOnly = true)
    public List<JobPostingEntity> getAllJobPostings() {
        return jobPostingRepository.findAll();
    }


     //구인자 정보를 삭제하는 메서드입니다.

    @Transactional
    public void deleteJobPosting(Long id) {
        JobPostingEntity jobPostingEntity = jobPostingRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));

        jobPostingRepository.delete(jobPostingEntity);
    }

    //구인자 정보 업데이트
    @Transactional
    public JobPostingEntity updateJobPosting(Long id, JobPostingDto.JobPostingRequestDto request) {
        JobPostingEntity jobPostingEntity = jobPostingRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));

        jobPostingEntity = JobPostingEntity.builder()
                .id(jobPostingEntity.getId())
                .email(request.getEmail())
                .name(request.getName())
                .address(request.getAddress())
                .experience(request.getExperience())
                .phoneNumber(request.getPhoneNumber())
                .build();

        return jobPostingRepository.save(jobPostingEntity);
    }
}

