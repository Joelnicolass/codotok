import { User } from "../../domain/entities/User.entity";
import {
  AuthDataSource,
  AuthRepository,
} from "../../domain/repositories/auth.repository";

export class AuthRespositoryImpl implements AuthRepository {
  constructor(private readonly datasource: AuthDataSource) {}

  login(email: string, password: string): Promise<User> {
    return this.datasource.login(email, password);
  }

  logout(): Promise<void> {
    return this.datasource.logout();
  }

  register(email: string, password: string): Promise<User> {
    return this.datasource.register(email, password);
  }
}
