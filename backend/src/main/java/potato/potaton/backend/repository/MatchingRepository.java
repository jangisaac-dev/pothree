package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import potato.potaton.backend.domain.MatchingEntity;
import potato.potaton.backend.domain.UserEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface MatchingRepository extends JpaRepository <MatchingEntity, Long> {
    List<MatchingEntity> findAllByEndPointId(Long requestId);
}

//이메일로 하도록 함
