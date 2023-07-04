import { Auth } from "../entities/Auth.entity";

export interface AuthRepository {
  login(email: string, password: string): Promise<Auth>;
  logout(): Promise<void>;
  register(email: string, password: string): Promise<Auth>;
}

export interface AuthDataSource {
  login(email: string, password: string): Promise<Auth>;
  logout(): Promise<void>;
  register(email: string, password: string): Promise<Auth>;
}
