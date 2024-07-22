package potato.potaton.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import potato.potaton.backend.domain.AddressEntity;
import potato.potaton.backend.repository.AddressRepository;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;

    public List<AddressEntity> getSiDoList() {
        return addressRepository.findByUpperCode(null);
    }

    public List<AddressEntity> getAddrByUpperCode(String upperCode) {
        return addressRepository.findByUpperCode(upperCode);
    }
}

