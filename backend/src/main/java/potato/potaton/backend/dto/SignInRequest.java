package potato.potaton.backend.dto;

import lombok.Getter;

@Getter
public class SignInRequest {
    private String email;
    private String password;
}
