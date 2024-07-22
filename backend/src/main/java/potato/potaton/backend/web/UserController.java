package potato.potaton.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
