package potato.potaton.backend.domain;


public class BaseResponseEntity <T> {
    public T body;
    public ErrorCode errorCode;

    public BaseResponseEntity(T body, ErrorCode errorCode) {
        this.body = body;
        this.errorCode = errorCode;
    }

    public T getBody() {
        return body;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }
}
