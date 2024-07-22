package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import potato.potaton.backend.domain.JobSeekerEntity;

import java.util.Optional;
import java.util.List;

public interface JobSeekerRepository extends JpaRepository<JobSeekerEntity, Long> {

    Optional<JobSeekerEntity> findByEmail(String email);

    // 이메일로 구직자를 조회하는 메서드 추가
    List<JobSeekerEntity> findByEmailContainingIgnoreCase(String email);

    // 이름으로 구직자를 조회하는 메서드 추가
    List<JobSeekerEntity> findByNameContainingIgnoreCase(String name);

    boolean existsByEmail(String email);
}
