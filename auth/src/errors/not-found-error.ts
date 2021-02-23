import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    // This string will not be shown to the user.
    // Its more so for logging reasons.
    super('Route not found.');
    
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);  
  }

  serializeErrors() {
    return [{
      message: 'Route not found.'
    }]
  }
}