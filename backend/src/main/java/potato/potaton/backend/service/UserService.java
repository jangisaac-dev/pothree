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
import potato.potaton.backend.dto.SignUpDto;
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
    public UserEntity signUp(SignUpDto.SignUpRequest request) {
        if (userRepository.existsByEmail(request.toEntity().getEmail())) {
            throw new CustomException(ErrorCode.USER_ALREADY_EXISTS); // 이메일 중복 확인
        }

        UserEntity userEntity = UserEntity.builder()
                .phone(request.toEntity().getPhone())
                .email(request.toEntity().getEmail())
                .password(request.toEntity().getPassword())
                .role(request.toEntity().getRole())
                .build();

        return userRepository.save(userEntity);
    }

    @Transactional
    public UserEntity authenticate(SignInRequest request) {
        UserEntity userEntity = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));

        if (!request.getPassword().equals(userEntity.getPassword())) {
            throw new CustomException(ErrorCode.PASSWORD_NOT_MATCH);
        }

        return userEntity;
    }
}
