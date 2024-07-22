package potato.potaton.backend.dto;

import potato.potaton.backend.domain.AddressEntity;

import java.util.ArrayList;
import java.util.List;


public class AddressListDto {
    public List<AddressEntity> list = new ArrayList<>();

    public List<AddressEntity> getList() {
        return list;
    }

    public void setList(List<AddressEntity> list) {
        this.list = list;
    }

    public AddressListDto(List<AddressEntity> list) {
        this.list = list;
    }
}
