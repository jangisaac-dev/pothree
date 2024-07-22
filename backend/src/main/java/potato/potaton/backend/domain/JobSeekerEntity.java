package potato.potaton.backend.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "job_seeker")
public class JobSeekerEntity extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(unique = true)
    private String email;

    @NotNull
    private String name;

    @NotNull
    private String phoneNumber;

    @NotNull
    private String address;

    @NotNull
    private String availability;

    @Lob
    private String experience; // 봉사나 요양 관련 경험

    @Lob
    private String qualifications; // 자격증


}
