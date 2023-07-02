import { UserCredential } from "firebase/auth";
import { User } from "../../domain/entities/User.entity";

export const userAdapter = (firebaseResponse: UserCredential): User => {
  return {
    id: firebaseResponse.user.uid,
    name:
      firebaseResponse.user.displayName || firebaseResponse.user.email || "",
    avatar: firebaseResponse.user.photoURL || "",
    email: firebaseResponse.user.email || "",
    createdAt: new Date(firebaseResponse.user.metadata.creationTime || ""),
  };
};
