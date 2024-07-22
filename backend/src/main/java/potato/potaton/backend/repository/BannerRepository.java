package potato.potaton.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import potato.potaton.backend.domain.BannerEntity;

import java.util.List;
import java.util.Optional;

@Repository
public interface BannerRepository extends JpaRepository<BannerEntity, Long> {
    Optional<BannerEntity> findByImageUrl(String imageUrl);
    List<BannerEntity> findByTitleContainingIgnoreCase(String title);
}
