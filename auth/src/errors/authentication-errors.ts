import { CustomError } from "./custom-error";

export class AuthenticationError extends CustomError {
  statusCode = 400;

  constructor(message: string) {
    // This string will not be shown to the user.
    // Its more so for logging reasons.
    super(message);
    
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, AuthenticationError.prototype);  
  }

  serializeErrors() {
    return [
      { message: this.message }
    ]
  }
}