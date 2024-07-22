package potato.potaton.backend.exception;

import lombok.*;
import potato.potaton.backend.type.ErrorCode;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomException extends RuntimeException{
    private ErrorCode errorCode;
    private String errorMessage;

    public CustomException(ErrorCode errorCode)
    {
        this.errorCode = errorCode;
        this.errorMessage=errorCode.getDescription();
    }
}
