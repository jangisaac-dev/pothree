package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import potato.potaton.backend.domain.JobPostingEntity;

import java.util.Optional;

@Repository
public interface JobPostingRepository extends JpaRepository<JobPostingEntity, Long> {

    // 이메일로 구인자 존재 여부 확인
    boolean existsByEmail(String email);

    // 이메일로 구인자 정보 조회
    Optional<JobPostingEntity> findByEmail(String email);

    // 전화번호로 여부 확인
    boolean existsByPhoneNumber(String phoneNumber);

    // 전화번호로 조회
    Optional<JobPostingEntity> findByPhoneNumber(String phoneNumber);
}
