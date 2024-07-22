package potato.potaton.backend.web;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import potato.potaton.backend.domain.AddressEntity;
import potato.potaton.backend.dto.AddressListDto;
import potato.potaton.backend.repository.AddressRepository;
import potato.potaton.backend.util.JwtTokenProvider;

import java.io.File;
import java.io.FileReader;

@RestController("/")
public class UserController {

    @Autowired
    JwtTokenProvider tokenProvider;

    @Autowired
    AddressRepository jpaAddressRepository;

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


//    @GetMapping("makeAddress")
//    public String makeAddress() {
//        File file = new File("/Users/isaacjang/Desktop/juso.json");
//
//        try {
//            JsonReader reader = new JsonReader(new FileReader("/Users/isaacjang/Desktop/juso.json"));
//            AddressListDto result = new Gson().fromJson(reader, AddressListDto.class);
//
//
//            System.out.println("resultSize : " + result.list.size());
//
//            jpaAddressRepository.saveAll(result.list);
//
//            return "resultSize : " + result.list.size();
//        } catch (Exception e) {
//            e.printStackTrace();
//            return e.getLocalizedMessage();
//        }
//
////        return "success";
//    }


}
