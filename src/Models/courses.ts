export class Course {
  private _courseId: number;
  private _courseName: string;
  private _institutionId: number;
  public constructor(name: string, institutionId: number, courseId: number) {
    this._courseName = name;
    this._institutionId = institutionId;
    this._courseId = courseId;
  }
  get courseId() {
    return this._courseId;
  }
}
