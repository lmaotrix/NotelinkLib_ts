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
    this._institutionId = institutionId;
    this._userId = this.userId;
  }
  get userId() {
    return this._userId;
  }
}
