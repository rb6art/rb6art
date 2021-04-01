import { genSaltSync, hash, compare } from "bcryptjs";

export class PasswordService {
  /**
   * Asynchronously generates a hash for the given string.
   */
  static convertToHash(password: string): Promise<string> {
    const hashedPassword = hash(
      password,
      genSaltSync(11)
    );
    return hashedPassword;
  }
  /**
   * Asynchronously compares the given data against the given hash.
   */
  static compare(storedPassword: string, suppliedPassword: string): Promise<boolean> {
    return compare(suppliedPassword, storedPassword);
  }
}