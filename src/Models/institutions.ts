import { NumericIdentityManager } from "@mantlebee/ts-core";
export class Institution {
  private _institutionId: number;
  private _institutionName: string;
  public constructor(name: string) {
    const idManager = new NumericIdentityManager();
    this._institutionId = idManager.newValue();
    this._institutionName = name;
  }
  get institutionId() {
    return this._institutionId;
  }
}

export class Course {
  private _courseId: number;
  private _courseName: string;
  private _institutionId: number;
  public constructor(name: string, institutionId: number) {
    this._courseName = name;
    this._institutionId = institutionId;
    const idManager = new NumericIdentityManager();
    this._courseId = idManager.newValue();
  }
  get courseId() {
    return this._courseId;
  }
}
