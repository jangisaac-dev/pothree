package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import potato.potaton.backend.domain.AddressEntity;

import java.util.List;

public interface AddressRepository extends JpaRepository<AddressEntity, Long> {
    public List<AddressEntity> findByUpperCode(String address);

    public List<AddressEntity> findByCode(String code);
}
