package potato.potaton.backend.dto;

import lombok.Builder;
import lombok.Getter;
import potato.potaton.backend.domain.UserEntity;

@Getter
@Builder

public class SignUpDto {
    @Builder
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
                    .role(this.role)
                    .build();
        }
    }

    public static class SignUpResponseDto {
        private Long id;
        private String password;
        private String email;
        private String phone;
        private String role;
    }


}
