import { User } from "../entities/User.entity";

export interface AuthRepository {
  login(email: string, password: string): Promise<User>;
  logout(): Promise<void>;
  register(email: string, password: string): Promise<User>;
}

export interface AuthDataSource {
  login(email: string, password: string): Promise<User>;
  logout(): Promise<void>;
  register(email: string, password: string): Promise<User>;
}
