package potato.potaton.backend.repository;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import potato.potaton.backend.domain.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <UserEntity, Long> {

    Optional<UserEntity> findByKakaoKey(String kakaoKey);

    Optional<UserEntity> findByEmail(String email);

    boolean existsByEmail(String email);
}

//이메일로 하도록 함
