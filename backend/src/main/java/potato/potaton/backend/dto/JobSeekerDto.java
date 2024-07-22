package potato.potaton.backend.dto;

import lombok.Builder;
import lombok.Getter;
import potato.potaton.backend.domain.JobSeekerEntity;

public class JobSeekerDto {

    @Getter
    @Builder
    public static class JobSeekerRequestDto {
        private String name;
        private String phoneNumber;
        private String email;
        private String address;
        private String experience;
        private String serviceType;  // 예를 들어, 봉사나 요양 등

        public JobSeekerEntity toEntity() {
            return JobSeekerEntity.builder()
                    .name(this.name)
                    .phoneNumber(this.phoneNumber)
                    .email(this.email)
                    .address(this.address)
                    .experience(this.experience)
                    .build();
        }
    }

    @Getter
    @Builder
    public static class JobSeekerResponseDto {
        private Long id;
        private String name;
        private String phoneNumber;
        private String email;
        private String address;
        private String experience;

        //Dto로 변환시킴
        public static JobSeekerResponseDto fromEntity(JobSeekerEntity entity) {
            return JobSeekerResponseDto.builder()
                    .id(entity.getId())
                    .name(entity.getName())
                    .phoneNumber(entity.getPhoneNumber())
                    .email(entity.getEmail())
                    .address(entity.getAddress())
                    .experience(entity.getExperience())
                    .build();
        }
    }
}
