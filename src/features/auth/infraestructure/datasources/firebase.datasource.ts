import { auth } from "../config/firebase.config";
import { User } from "../../../../common/domain/entities/User.entity";
import { AuthDataSource } from "../../domain/repositories/auth.repository";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { userAdapter } from "../adapters/firebase.adapters";
import { Auth } from "../../domain/entities/Auth.entity";

export class FirebaseDataSource implements AuthDataSource {
  async login(email: string, password: string): Promise<Auth> {
    const response = await signInWithEmailAndPassword(auth, email, password);

    const user = userAdapter(response);
    const token = (await response.user?.getIdToken()) || null;

    return {
      token,
      user,
    };
  }

  async logout(): Promise<void> {
    await auth.signOut();
  }

  async register(email: string, password: string): Promise<Auth> {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userAdapter(response);
    const token = (await response.user?.getIdToken()) || null;

    return {
      token,
      user,
    };
  }
}
