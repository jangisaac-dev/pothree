package potato.potaton.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NormalSignUpDto {
    //구인자 : 이름, 연락처, 생년월일, 성별, 장기요양등급
    private String kakaoKey;
    private String name;
    private String phone;
    private String birth;
    private String sex;
    private String yoyangRole;
}
