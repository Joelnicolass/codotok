import { LoginUseCase } from "../../domain/usecases/login.usecase";
import { LoginWithGoogleUseCase } from "../../domain/usecases/loginGoogle.usecase";
import { LogoutUseCase } from "../../domain/usecases/logout.usecase";
import { RegisterUseCase } from "../../domain/usecases/register.usecase";
import { FirebaseDataSource } from "../datasources/firebase.datasource";
import { AuthRespositoryImpl } from "../repositories/auth.repository.impl";

class AuthUseCases {
  private readonly datasource = new FirebaseDataSource();
  private readonly repository = new AuthRespositoryImpl(this.datasource);

  public readonly login = new LoginUseCase(this.repository);

  public readonly logout = new LogoutUseCase(this.repository);

  public readonly register = new RegisterUseCase(this.repository);

  public readonly loginWithGoogle = new LoginWithGoogleUseCase(this.repository);
}

export const authUseCases = new AuthUseCases();
