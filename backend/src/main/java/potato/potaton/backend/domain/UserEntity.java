package potato.potaton.backend.domain;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

@Getter
@Entity
@Table(name = "User")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserEntity extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(unique = true)
    private String phone;

    @Column(unique = true)
    private String kakaoKey;

    private String birth;

    private String sex;

    private String yoyangRole;

    private String yoyangImage;

    private String profileImage; // 나중에

    @NotNull
    private String role;
}
