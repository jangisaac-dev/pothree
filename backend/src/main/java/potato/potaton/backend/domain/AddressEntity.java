package potato.potaton.backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "Address")
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class AddressEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;

    private String name;

    public AddressEntity(String code, String name) {
        this.code = code;
        this.name = name;
    }
}
