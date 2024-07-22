package potato.potaton.backend.dto;

import lombok.Builder;
import lombok.Getter;
import potato.potaton.backend.domain.BannerEntity;

public class BannerDto {

    @Getter
    @Builder
    public static class BannerRequestDto {
        private String title;
        private String imageUrl;
        private String link;

        public BannerEntity toEntity() {
            return BannerEntity.builder()
                    .title(this.title)
                    .imageUrl(this.imageUrl)
                    .link(this.link)
                    .build();
        }
    }

    @Getter
    @Builder
    public static class BannerResponseDto {
        private Long id;
        private String title;
        private String imageUrl;
        private String link;
    }
}
