package potato.potaton.backend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;
import potato.potaton.backend.domain.UserEntity;
import potato.potaton.backend.dto.SignInRequest;
import potato.potaton.backend.exception.CustomException;
import potato.potaton.backend.repository.UserRepository;
import potato.potaton.backend.type.ErrorCode;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UserEntity loadUserByKakaoKey(String kakaoKey) {
        return userRepository.findByKakaoKey(kakaoKey)
                .orElseThrow(() -> new NotFoundException("사용자를 찾을 수 없습니다. => " + kakaoKey));
    }

    @Transactional
    public UserEntity signUp(UserEntity user) {
        if (userRepository.existsByPhone(user.getPhone())) {
            throw new CustomException(ErrorCode.USER_ALREADY_EXISTS); // 이메일 중복 확인
        }
        if (userRepository.existsByKakaoKey(user.getKakaoKey())) {
            throw new CustomException(ErrorCode.USER_ALREADY_EXISTS); // 이메일 중복 확인
        }

        return userRepository.save(user);
    }

//    @Transactional
//    public UserEntity authenticate(SignInRequest request) {
//        UserEntity userEntity = userRepository.findByEmail(request.getEmail())
//                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
//
//        if ("USER_PENDING".equals(userEntity.getRole())) {
//            throw new CustomException(ErrorCode.USER_NOT_APPROVED); // 승인되지 않은 유저
//        }
//
//        return userEntity;
//    }

    public UserEntity findUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
    }
}
