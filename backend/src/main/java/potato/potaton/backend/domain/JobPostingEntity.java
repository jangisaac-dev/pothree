package potato.potaton.backend.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "job_posting") // 테이블 이름을 소문자로 변경
public class JobPostingEntity extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String email;

    @NotNull
    private String name;

    @NotNull
    private String address;

    @NotNull
    private String experience;

    @NotNull
    private String phoneNumber;

    public JobPostingEntity(String email, String name, String address, String experience, String phoneNumber) {
        this.email = email;
        this.name = name;
        this.address = address;
        this.experience = experience;
        this.phoneNumber = phoneNumber;
    }
}
