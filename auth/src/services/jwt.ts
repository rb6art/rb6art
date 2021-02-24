import jwt from 'jsonwebtoken';
import jsonwebtoken from "jsonwebtoken";

export class JWTService {

  static getToken = (email: string, userID: string): string => {
    const jwtSecret = process.env.JWT_SECRET; // Using the secret in the kubernetes Node
    return jsonwebtoken.sign({ email, userID }, jwtSecret!);
  };

  static verifyToken = (jwtToken: string): object | string => {
    const token = jwt.verify(jwtToken, process.env.JWT_SECRET!);
    return token;
  }
}