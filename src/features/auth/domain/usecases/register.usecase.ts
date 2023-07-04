import { Auth } from "../entities/Auth.entity";
import { User } from "../../../../common/domain/entities/User.entity";
import { AuthRepository } from "../repositories/auth.repository";

export class RegisterUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(email: string, password: string): Promise<Auth> {
    return await this.authRepository.register(email, password);
  }
}
