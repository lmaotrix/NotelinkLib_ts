import { NumericIdentityManager } from "@mantlebee/ts-core";
import { User } from "../Models/users";
import { Institution } from "../Models/institutions";
import { Course } from "../Models/courses";

export interface INoteLinkManager {
  createCourse(name: string, institutionId: number): Course;
  createInstitution(name: string): Institution;
  createUser(
    firstName: string,
    lastName: string,
    email: string,
    institutionId: number
  ): User;
  deleteUser(userId: number): void;
  getUser(userId: number): User;
}
