import { User } from "../../../../common/domain/entities/User.entity";

export const MOCK_USER: User = {
  id: window.crypto.randomUUID(),
  name: "Mock Sartori",
  avatar: "https://i.pravatar.cc/150?img=1",
  email: "mock@mock.com",
  createdAt: new Date(),
};
