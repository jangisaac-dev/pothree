package potato.potaton.backend.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor

public class UserDto {
    private String username;
    private String password;
    private String email;
    private String phone;
    private String role;

    public UserDto toUserEntity() {
        return UserDto.bulider()
                .phone(this.phone)
                .email(this.email)
                .password(this.password)
                .role(this.role)
                .build();
    }
}
