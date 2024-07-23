package potato.potaton.backend.web;

import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.webjars.NotFoundException;
import potato.potaton.backend.domain.MatchingEntity;
import potato.potaton.backend.domain.UserEntity;
import potato.potaton.backend.dto.FindPeopleDto;
import potato.potaton.backend.dto.MatchingRequestDto;
import potato.potaton.backend.service.MatchingService;
import potato.potaton.backend.service.UserService;
import potato.potaton.backend.util.JwtTokenProvider;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/matching")
@RequiredArgsConstructor
public class MatchingController {
    private final MatchingService matchingService;
    private final JwtTokenProvider tokenProvider;
    private final UserService userService;

    @PostMapping("/list")
    public ResponseEntity<List<UserEntity>> getMyRequester(@RequestParam String token) {
        try {
            Long id = tokenProvider.extractId(token);

            List<MatchingEntity> list = matchingService.findForSelf(id);
            List<UserEntity> requesters = new ArrayList<>();
            for (MatchingEntity matching : list) {
                requesters.add(userService.findUserById(matching.getRequestId()));
            }
            return ResponseEntity.ok(requesters);
        } catch (Exception e) {
            e.printStackTrace();
            throw new NotFoundException("없는 사용자입니다.");
        }
    }

    @PostMapping("/save")
    public ResponseEntity<MatchingEntity> signUpSeeker(@RequestBody MatchingRequestDto model) throws Exception {
        System.out.println(new Gson().toJson(model));
        if (!tokenProvider.validateToken(model.getToken())) {
            throw new NotFoundException("Invalid token.");
        }
        Long userId = tokenProvider.extractId(model.getToken());
        return ResponseEntity.ok(matchingService.save(
                new MatchingEntity(null, userId, Long.parseLong(model.getEndPointId()) )
        ));
    }


    @PostMapping("/findOldMan")
    public ResponseEntity<List<UserEntity>> findOldMan(@RequestBody FindPeopleDto model) throws Exception {
        if (!tokenProvider.validateToken(model.getToken())) {
            throw new NotFoundException("Invalid token.");
        }
        Long userId = tokenProvider.extractId(model.getToken());

        UserEntity user = userService.findUserById(userId);
        if (!user.getRole().equals("T")) {
            throw new IllegalAccessException("요양사만 검색할 수 있습니다.");
        }

        List<UserEntity> users = userService.findUserByAddress(model.getLocationCode());
        List<UserEntity> needHelpUser = new ArrayList<>();
        for (UserEntity userEntity : users) {
            if (userEntity.getNeedHelp().equals("T")) {
                needHelpUser.add(userEntity);
            }
        }

        return ResponseEntity.ok(needHelpUser);
    }

    @PostMapping("/jobSeeker")
    public ResponseEntity<List<UserEntity>> jobSeeker(@RequestBody FindPeopleDto model) throws Exception {
        if (!tokenProvider.validateToken(model.getToken())) {
            throw new NotFoundException("Invalid token.");
        }
        Long userId = tokenProvider.extractId(model.getToken());

        UserEntity user = userService.findUserById(userId);
        if (!user.getRole().equals("F")) {
            throw new IllegalAccessException("도움이 필요한 사람만 검색할 수 있습니다.");
        }

        List<UserEntity> users = userService.findUserByAddress(model.getLocationCode());
        List<UserEntity> resultUsers = new ArrayList<>();
        for (UserEntity userEntity : users) {
            if (userEntity.getRole().equals("T")) {
                resultUsers.add(userEntity);
            }
        }

        return ResponseEntity.ok(resultUsers);
    }

}
