package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import potato.potaton.backend.domain.JobPostingEntity;

import java.util.Optional;

@Repository
public interface JobPostingRepository extends JpaRepository<JobPostingEntity, Long> {
    boolean existsByEmail(String email);
    Optional<JobPostingEntity> findByEmail(String email);
}