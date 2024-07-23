package potato.potaton.backend.domain;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

@Getter
@Setter
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

    @Column(columnDefinition = "longtext")
    private String yoyangImage;

    @Column(columnDefinition = "longtext")
    private String profileImage; // 나중에

    @NotNull
    private String role;

    private String needHelp;

    @NotNull
    private String address;
}
