package potato.potaton.backend.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserUpdateDto {

    private String token;

    private String birth;
    private String sex;
    private String yoyangRole;
    private String yoyangImage;
    private String profileImage;
}
