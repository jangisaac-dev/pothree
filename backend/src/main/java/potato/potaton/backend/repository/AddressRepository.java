package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import potato.potaton.backend.domain.AddressEntity;

public interface AddressRepository extends JpaRepository<AddressEntity, Long> {
}
