package potato.potaton.backend.dto;

import lombok.Builder;
import lombok.Getter;


public class JobPostingDto {

    @Getter
    @Builder

    public static class JobPostingRequestDto {
        private String email;
        private String name;
        private String address;
        private String experience;
        private String phoneNumber;

//        public JobPostingEntity toEntity() {
//            return JobPostingEntity.builder()
//                    .email(this.email)
//                    .name(this.name)
//                    .address(this.address)
//                    .experience(this.experience)
//                    .phoneNumber(this.phoneNumber)
//                    .build();
//        }
    }

    @Getter
    @Builder

    public static class JobPostingResponseDto {
        private Long id;
        private String email;
        private String name;
        private String address;
        private String experience;
        private String phoneNumber;
    }
}
