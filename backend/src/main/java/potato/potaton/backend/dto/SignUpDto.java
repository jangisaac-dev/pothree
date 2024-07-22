package potato.potaton.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import potato.potaton.backend.domain.UserEntity;

@Getter
@Builder
@NoArgsConstructor
public class SignUpDto {

    @Builder
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SignUpRequest {
        private String email;
        private String password;
        private String phone;
        private String role;

        public UserEntity toEntity() {
            return UserEntity.builder()
                    .phone(this.phone)
                    .email(this.email)
                    .password(this.password)
                    .role("USER_PENDING") // 기본 대기로 설정
                    .build();
        }
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SignUpResponseDto {
        private Long id;
        private String email;
        private String phone;
        private String role;
    }
}