package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import potato.potaton.backend.domain.UserEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <UserEntity, Long> {

    Optional<UserEntity> findByKakaoKey(String kakaoKey);


    boolean existsByPhone(String phone);
    boolean existsByKakaoKey(String kakaoKey);

    List<UserEntity> findAllByAddress(String address);
}

//이메일로 하도록 함
