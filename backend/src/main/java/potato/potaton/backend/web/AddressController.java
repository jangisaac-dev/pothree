package potato.potaton.backend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.webjars.NotFoundException;
import potato.potaton.backend.domain.AddressEntity;
import potato.potaton.backend.service.AddressService;

import java.util.List;

@RestController("/addr")
public class AddressController {


    @Autowired
    AddressService service;

    @GetMapping("/sido")
    public ResponseEntity<List<AddressEntity>> findSido() {
        return ResponseEntity.ok(service.getSiDoList());
    }


    @GetMapping("/sigungu")
    public ResponseEntity<List<AddressEntity>> findSigungu(String upperCode) {
        System.out.println("upperCode.substring(0, 1) : " + upperCode.substring(0, 2));
        return ResponseEntity.ok(service.getAddrByUpperCode(upperCode.substring(0, 2)));
    }

    @GetMapping("/dongubmeon")
    public ResponseEntity<List<AddressEntity>> findDongubmeon(String upperCode) {
        return ResponseEntity.ok(service.getAddrByUpperCode(upperCode.substring(0, 5)));
    }
}
