package potato.potaton.backend.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import potato.potaton.backend.domain.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <UserEntity, Long> {

    Optional<UserEntity> findByEmail(String email);

    boolean existsByPhone(String email);
}

//이메일로 하도록 함
