package potato.potaton.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import potato.potaton.backend.domain.UserEntity;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SeekerSignUpDto {
    //구직자 : 이름, 연락처, 생년월일, 성별, 사진첨부
    private String kakaoKey;
    private String name;
    private String phone;
    private String birth;
    private String sex;
    private String image;
}
