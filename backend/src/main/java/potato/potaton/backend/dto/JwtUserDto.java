package potato.potaton.backend.dto;

import lombok.Getter;

@Getter
public class JwtUserDto {
    public String userId;
    public String authKey;
}
