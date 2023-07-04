import { Auth } from "../entities/Auth.entity";
import { AuthRepository } from "../repositories/auth.repository";

export class LoginWithGoogleUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(): Promise<Auth> {
    return this.authRepository.LoginWithGoogle();
  }
}
