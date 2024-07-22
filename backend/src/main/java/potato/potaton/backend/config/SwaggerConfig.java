package potato.potaton.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;


@Configuration
public class SwaggerConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("potato.potaton.backend.web"))
                .paths(PathSelectors.any())
                .build();
    }

//    private SecurityScheme createAPIKeyScheme() {
//        return new SecurityScheme().type(SecurityScheme.Type.HTTP)
//                .bearerFormat("JWT")
//                .scheme("bearer");
//    }


//    private OpenApiCustomizer createOpenApiCustomizer(String title, String version) {
//        return openApi -> {
//            openApi.info(new Info().title(title).version(version));
//            openApi.schemaRequirement("bearerAuth", createAPIKeyScheme());
//            openApi.addSecurityItem(new SecurityRequirement().addList("bearerAuth"));
//        };
//    }

//    @Bean
//    public GroupedOpenApi allApi() {
//        return GroupedOpenApi.builder()
//                .group("all")
//                .pathsToMatch("/**")
//                .displayName("All API")
//                .addOpenApiCustomizer(createOpenApiCustomizer("모든 API", "v0.4"))
//                .build();
//    }
//
//    @Bean
//    public GroupedOpenApi userApi() {
//        String[] paths = {"/user/**"};
//
//        return GroupedOpenApi.builder()
//                .group("user")
//                .pathsToMatch(paths)
//                .displayName("User's API")
//                .addOpenApiCustomizer(createOpenApiCustomizer("유저 관련 API", "v0.4"))
//                .build();
//    }
//
//    @Bean
//    public GroupedOpenApi attendanceApi() {
//        String[] paths = {"/attendance/**"};
//
//        return GroupedOpenApi.builder()
//                .group("attendance")
//                .pathsToMatch(paths)
//                .displayName("Attendance's API")
//                .addOpenApiCustomizer(createOpenApiCustomizer("출결 관련 API", "v0.4"))
//                .build();
//    }
}
