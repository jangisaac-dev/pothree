package potato.potaton.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import potato.potaton.backend.domain.BannerEntity;
import potato.potaton.backend.dto.BannerDto;
import potato.potaton.backend.exception.CustomException;
import potato.potaton.backend.repository.BannerRepository;
import potato.potaton.backend.type.ErrorCode;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BannerService {

    private final BannerRepository bannerRepository;

    // 배너 생성
    @Transactional
    public BannerEntity createBanner(BannerDto.BannerRequestDto request) {
        BannerEntity bannerEntity = BannerEntity.builder()
                .title(request.getTitle())
                .imageUrl(request.getImageUrl())
                .link(request.getLink())
                .build();
        return bannerRepository.save(bannerEntity);
    }

    // ID로 배너 조회
    @Transactional(readOnly = true)
    public BannerEntity getBannerById(Long id) {
        return bannerRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }

    // 모든 배너 조회
    @Transactional(readOnly = true)
    public List<BannerEntity> getAllBanners() {
        return bannerRepository.findAll();
    }

    // 배너 삭제
    @Transactional
    public void deleteBanner(Long id) {
        BannerEntity bannerEntity = bannerRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
        bannerRepository.delete(bannerEntity);
    }

    // 배너 수정
    @Transactional
    public BannerEntity updateBanner(Long id, BannerDto.BannerRequestDto request) {
        BannerEntity existingBanner = bannerRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));

        existingBanner = BannerEntity.builder()
                .id(existingBanner.getId())
                .title(request.getTitle())
                .imageUrl(request.getImageUrl())
                .link(request.getLink())
                .build();

        return bannerRepository.save(existingBanner);
    }

    // 제목으로 배너 검색
    @Transactional(readOnly = true)
    public List<BannerEntity> findBannersByTitle(String title) {
        return bannerRepository.findByTitleContainingIgnoreCase(title);
    }

    // 이미지 URL로 배너 검색
    @Transactional(readOnly = true)
    public BannerEntity findBannerByImageUrl(String imageUrl) {
        return bannerRepository.findByImageUrl(imageUrl)
                .orElseThrow(() -> new CustomException(ErrorCode.DATA_NOT_FOUND));
    }
}

