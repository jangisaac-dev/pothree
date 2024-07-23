package potato.potaton.backend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;
import potato.potaton.backend.domain.UserEntity;
import potato.potaton.backend.dto.UserUpdateDto;
import potato.potaton.backend.exception.CustomException;
import potato.potaton.backend.repository.UserRepository;
import potato.potaton.backend.type.ErrorCode;
import potato.potaton.backend.util.JwtTokenProvider;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final JwtTokenProvider jwtTokenProvider;

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

    @Transactional
    public UserEntity update(UserUpdateDto dto) {
        try {
            Long id = jwtTokenProvider.extractId(dto.getToken());

            UserEntity user = userRepository.findById(id).orElseThrow();

            user.setBirth(dto.getBirth());
            user.setSex(dto.getSex());
            user.setProfileImage(dto.getProfileImage());
            user.setYoyangImage(dto.getYoyangImage());
            user.setYoyangRole(dto.getYoyangRole());
            return userRepository.save(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
        throw new RuntimeException("error update");
    }

    public UserEntity findUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));
    }
}
