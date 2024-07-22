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

    public void changeRole(String newRole) {
        if ("USER_PENDING".equals(this.role) || "USER".equals(this.role)) {
            this.role = newRole;
        } else {
            throw new IllegalStateException("Cannot change role from " + this.role);
        }
    }
}
