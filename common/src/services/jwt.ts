import { sign, verify } from "jsonwebtoken";

export class JWTService {
  /**
   * Create a JSON Web Token with the provided info.
   */
  static createToken(email: string, userId: string) {
    // Using the secret in the kubernetes Node
    const jwtSecret = process.env.JWT_SECRET;
    return sign({ email: email, userID: userId }, jwtSecret!);
  }
  /**
   * Verify that a provided JWT Token is valid.
   */
  static verifyToken(jwtToken: string) {
    return verify(jwtToken, process.env.JWT_SECRET!)
  }
}