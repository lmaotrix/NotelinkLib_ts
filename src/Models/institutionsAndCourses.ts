export class Institution {
  private _institutionId: number;
  private _institutionName: string;
  public constructor(institutionId: number, name: string) {
    this._institutionId = institutionId;
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
  public constructor(courseId: number, name: string, institutionId: number) {
    this._courseId = courseId;
    this._courseName = name;
    this._institutionId = institutionId;
  }
  get courseId() {
    return this._courseId;
  }
}
