import { ICommunityManager } from "../Interfaces/ICommunityManager";
import { Library } from "../Models/Library";
import { User } from "../Models/User";

export class CommunityManager implements ICommunityManager {
  createCommuniTy(userId: number, users: User[], library: Library): void {
    throw new Error("Method not implemented.");
  }
}
