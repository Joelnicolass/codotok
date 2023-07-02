import { auth } from "../config/firebase.config";
import { User } from "../../domain/entities/User.entity";
import { AuthDataSource } from "../../domain/repositories/auth.repository";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { userAdapter } from "../adapters/firebase.adapters";

export class FirebaseDataSource implements AuthDataSource {
  async login(email: string, password: string): Promise<User> {
    const response = await signInWithEmailAndPassword(auth, email, password);

    return userAdapter(response);
  }

  async logout(): Promise<void> {
    await auth.signOut();
  }

  async register(email: string, password: string): Promise<User> {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userAdapter(response);
  }
}
