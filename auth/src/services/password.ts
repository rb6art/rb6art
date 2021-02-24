import bcrypt from 'bcryptjs';

export class PasswordService {
  static async convertToHash(password: string) {
    const salt = bcrypt.genSaltSync(8) as string;
    const hashedPassword = await bcrypt.hash(password, salt) as string;
    return hashedPassword;
  }

  static async compare(storePassword: string, suppliedPassword: string) {
    const comparedPasswords = await bcrypt.compare(suppliedPassword, storePassword)
    return comparedPasswords;
  }
}