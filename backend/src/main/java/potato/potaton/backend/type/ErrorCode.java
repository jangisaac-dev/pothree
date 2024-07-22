package potato.potaton.backend.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    USER_NOT_FOUND("사용자를 찾을 수 없습니다."),
    ALREADY_EXISTS_PHONE("이미 가입된 휴대전화번호입니다."),
    PASSWORD_NOT_MATCH("비밀번호가 일치하지 않습니다."),
    USER_ALREADY_EXISTS("이미 가입된 이메일입니다."),
    USER_NOT_PERMITTED("사용자 권한이 없습니다."),
    TOKEN_EXPIRED("유효기간이 만료된 토큰입니다. 다시 로그인해주세요."),
    TOKEN_NOT_MATCH_USER("요청하신 사용자와 Token 인증 사용자가 일치하지 않습니다."),
    //에러 메시지 추가
    INVALID_EMAIL_FORMAT("잘못된 이메일 형식입니다."),
    PASSWORD_TOO_SHORT("비밀번호가 너무 짧습니다."),
    REQUIRED_FIELD_MISSING("필수 필드가 누락되었습니다."),
    ACCESS_DENIED("접근 권한이 없습니다."),
    FORBIDDEN("금지된 접근입니다."),
    DATA_INTEGRITY_VIOLATION("데이터 무결성 위반입니다."),
    DATA_NOT_FOUND("데이터가 존재하지 않습니다."),
    SYSTEM_ERROR("시스템 오류가 발생했습니다."),
    SERVICE_UNAVAILABLE("서비스를 이용할 수 없습니다."),
    INVALID_TOKEN("유효하지 않은 토큰입니다."),
    SESSION_EXPIRED("세션이 만료되었습니다."),
    USER_NOT_APPROVED("승인되지 않은 유저입니다."),
    DUPLICATE_EMAIL("이미 사용중인 이메일입니다."),
    INVALID_LOGIN("로그인정보가 잘못되었습니다.")
    ;

    private final String description;
}