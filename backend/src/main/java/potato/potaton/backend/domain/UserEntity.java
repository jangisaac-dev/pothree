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

    @NotNull
    private String email;

    @NotNull
    private String password;

    @NotNull
    private String role;

    public UserEntity(String phone, String email, String password, String role) {
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
