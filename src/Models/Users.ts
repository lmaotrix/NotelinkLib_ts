import { NumericIdentityManager } from "@mantlebee/ts-core";

export class User {
  private _email: string;
  private _firstName: string;
  private _institutionId: number;
  private _lastName: string;
  private _userId: number;
  public constructor(
    firstName: string,
    lastName: string,
    email: string,
    institutionId: number
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._institutionId = institutionId;
    const idManager = new NumericIdentityManager();
    this._userId = idManager.newValue();
  }
  get userId() {
    return this._userId;
  }
}
