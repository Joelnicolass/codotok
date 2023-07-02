import { User } from "../entities/User.entity";
import { AuthRepository } from "../repositories/auth.repository";

export class LoginUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(email: string, password: string): Promise<User> {
    return await this.authRepository.login(email, password);
  }
}
