package potato.potaton.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import potato.potaton.backend.domain.JobSeekerEntity;
import potato.potaton.backend.dto.JobSeekerDto;
import potato.potaton.backend.dto.JwtTokenDto;
import potato.potaton.backend.exception.CustomException;
import potato.potaton.backend.repository.JobSeekerRepository;
import potato.potaton.backend.type.ErrorCode;
import potato.potaton.backend.util.JwtTokenProvider;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class JobSeekerService {

    private final JobSeekerRepository jobSeekerRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public JobSeekerEntity createJobSeeker(JobSeekerDto.JobSeekerRequestDto request) {
        JobSeekerEntity jobSeekerEntity = JobSeekerEntity.builder()
                .email(request.getEmail())
                .name(request.getName())
                .address(request.getAddress())
                .experience(request.getExperience())
                .phoneNumber(request.getPhoneNumber())
                .build();

        return jobSeekerRepository.save(jobSeekerEntity);
    }

    @Transactional(readOnly = true)
    public JobSeekerEntity getJobSeekerById(Long id) {
        return jobSeekerRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public List<JobSeekerEntity> getAllJobSeekers() {
        return jobSeekerRepository.findAll();
    }

    @Transactional
    public void deleteJobSeeker(Long id) {
        JobSeekerEntity jobSeekerEntity = jobSeekerRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));

        jobSeekerRepository.delete(jobSeekerEntity);
    }

    @Transactional
    public JobSeekerEntity updateJobSeeker(Long id, JobSeekerDto.JobSeekerRequestDto request) {
        JobSeekerEntity existingJobSeeker = jobSeekerRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));

        JobSeekerEntity updatedJobSeeker = JobSeekerEntity.builder()
                .id(existingJobSeeker.getId())
                .email(request.getEmail())
                .name(request.getName())
                .address(request.getAddress())
                .experience(request.getExperience())
                .phoneNumber(request.getPhoneNumber())
                .build();

        return jobSeekerRepository.save(updatedJobSeeker);
    }

    @Transactional(readOnly = true)
    public List<JobSeekerEntity> findJobSeekersByName(String name) {
        return jobSeekerRepository.findByNameContainingIgnoreCase(name);
    }

    @Transactional(readOnly = true)
    public List<JobSeekerEntity> findJobSeekersByEmail(String email) {
        return jobSeekerRepository.findByEmailContainingIgnoreCase(email);
    }

    @Transactional
    public String signUpAndGenerateToken(JobSeekerDto.JobSeekerRequestDto request) {
        if (jobSeekerRepository.existsByEmail(request.getEmail())) {
            throw new CustomException(ErrorCode.DUPLICATE_EMAIL);
        }

        JobSeekerEntity jobSeekerEntity = JobSeekerEntity.builder()
                .email(request.getEmail())
                .name(request.getName())
                .address(request.getAddress())
                .experience(request.getExperience())
                .phoneNumber(request.getPhoneNumber())
                .build();

        jobSeekerRepository.save(jobSeekerEntity);

        JwtTokenDto tokenDto = jwtTokenProvider.issueToken(jobSeekerEntity.getId());
        return tokenDto.getAccessToken();  // AccessToken만 반환
    }

    @Transactional
    public String loginAndGenerateToken(JobSeekerDto.JobSeekerRequestDto request) {
        JobSeekerEntity jobSeekerEntity = jobSeekerRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new CustomException(ErrorCode.INVALID_LOGIN));

        // 여기서 비밀번호 검증 로직 추가 가능 (현재 예제에서는 비밀번호 필드 없음)

        JwtTokenDto tokenDto = jwtTokenProvider.issueToken(jobSeekerEntity.getId());
        return tokenDto.getAccessToken();  // AccessToken만 반환
    }
}