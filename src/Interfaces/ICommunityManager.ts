import { Library } from "../Models/Library";
import { User } from "../Models/User";
export interface ICommunityManager {
  createCommuniTy(userId: number, users: User[], library: Library): void;
}
