package potato.potaton.backend.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder

public class SignUpDto {
    private String username;
    private String password;
    private String email;
    private String phone;
    private String role;

    public static class SignUpResponseDto {
        private Long id;
        private String password;
        private String email;
        private String phone;
        private String role;
    }

    public SignUpDto toUserEntity() {
        return SignUpDto.builder()
                .phone(this.phone)
                .email(this.email)
                .password(this.password)
                .role(this.role)
                .build();
    }
}
