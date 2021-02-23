import { CustomError } from "./custom-error";

export class DatabaseConnectionEror extends CustomError {
  reason = "Error Connecting to Database!";
  statusCode = 500;

  constructor() {
    // This string will not be shown to the user.
    // Its more so for logging reasons.
    super('Error Connecting to Database.');
    
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionEror.prototype);  
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}