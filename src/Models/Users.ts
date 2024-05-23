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
    institutionId: number,
    userId: number
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    const idManager = new NumericIdentityManager();
    this._userId = idManager.newValue();
    this._institutionId = institutionId;
    this._userId = userId;
  }
  get userId() {
    return this._userId;
  }
}
