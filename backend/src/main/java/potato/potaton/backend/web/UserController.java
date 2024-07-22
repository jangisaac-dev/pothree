package potato.potaton.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.webjars.NotFoundException;
import potato.potaton.backend.repository.AddressRepository;
import potato.potaton.backend.util.JwtTokenProvider;

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
    public ResponseEntity<Long> tokenCheck(@RequestParam("token") String token) {
        try {
            Long id = tokenProvider.extractId(token);
            return ResponseEntity.ok(id);
//            return "" + id;
        } catch (Exception e) {
            e.printStackTrace();
            throw new NotFoundException("없는 사용자입니다.");
//            return e.getLocalizedMessage();
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
