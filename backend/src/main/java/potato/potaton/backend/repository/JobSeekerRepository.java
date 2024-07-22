package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import potato.potaton.backend.domain.JobSeekerEntity;

import java.util.List;
import java.util.Optional;

public interface JobSeekerRepository extends JpaRepository<JobSeekerEntity, Long> {
    Optional<JobSeekerEntity> findByEmail(String email);

    //이름으로 검색
    List<JobSeekerEntity> findByNameContainingIgnoreCase(String name);

    //이메일로 검색
    List<JobSeekerEntity> findByEmailContainingIgnoreCase(String email);

    boolean existsByEmail(String email);
}
