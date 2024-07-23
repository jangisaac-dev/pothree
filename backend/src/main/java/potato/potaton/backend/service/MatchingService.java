package potato.potaton.backend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;
import potato.potaton.backend.domain.MatchingEntity;
import potato.potaton.backend.domain.UserEntity;
import potato.potaton.backend.exception.CustomException;
import potato.potaton.backend.repository.MatchingRepository;
import potato.potaton.backend.repository.UserRepository;
import potato.potaton.backend.type.ErrorCode;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MatchingService {
    @Autowired
    private final MatchingRepository matchingRepository;

    public List<MatchingEntity> findForSelf(Long id) {
        return matchingRepository.findAllByEndPointId(id);
    }

    public MatchingEntity save(MatchingEntity matchingEntity) {
        return matchingRepository.save(matchingEntity);
    }
}
