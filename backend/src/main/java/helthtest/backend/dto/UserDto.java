package helthtest.backend.dto;

import helthtest.backend.domain.UserEntity;
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

    public UserEntity toUserEntity() {
        return UserEntity.builder()
                .phone(this.phone)
                .email(this.email)
                .password(this.password)
                .role(this.role)
                .build();
    }
}
