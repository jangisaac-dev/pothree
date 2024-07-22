package potato.potaton.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import potato.potaton.backend.util.JwtTokenProvider;

@RestController("/")
public class UserController {

    @Autowired
    JwtTokenProvider tokenProvider;

    @GetMapping("token")
    public String createToken(String id) {

        return tokenProvider.createAccessToken(1L);
    }

    @GetMapping("token-check")
    public String tokenCheck(@RequestParam("token") String token) {
        try {
            Long id = tokenProvider.extractId(token);
            return "" + id;
        } catch (Exception e) {
            e.printStackTrace();
            return e.getLocalizedMessage();
        }
    }
}
