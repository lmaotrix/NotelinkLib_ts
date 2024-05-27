import { NumericIdentityManager } from "@mantlebee/ts-core";

import { INoteLinkManager } from "../Interfaces/INoteLinkManager";
import { User } from "../Models/users";
import { Course } from "../Models/courses";
import { Institution } from "../Models/institutions";
export class NoteLinkManager implements INoteLinkManager {
  createCourse(name: string, institutionId: number): Course {
    const idManager = new NumericIdentityManager();
    let courseId = idManager.newValue();
    const course = new Course(name, institutionId, courseId);
    return course;
  }
  createInstitution(name: string): Institution {
    const idManager = new NumericIdentityManager();
    let institutionId = idManager.newValue();
    const institution = new Institution(name, institutionId);
    return institution;
  }

  createUser(
    firstName: string,
    lastName: string,
    email: string,
    institutionId: number
  ): User {
    const idManager = new NumericIdentityManager();
    let userId = idManager.newValue();
    const user = new User(firstName, lastName, email, institutionId, userId);
    return user;
  }
}
