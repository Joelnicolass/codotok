import { User } from "../../../../common/domain/entities/User.entity";

export class Auth {
  constructor(public token: string | null, public user: User | null) {}
}
