import { User } from "../Models/User";
import { Library } from "../Models/Library";
type Community = {
  CreatorId: number;
  users: User[];
  libraries: Library[];
};
