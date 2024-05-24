export class Institution {
  private _institutionId: number;
  private _institutionName: string;
  public constructor(name: string, institutionId: number) {
    this._institutionId = institutionId;
    this._institutionName = name;
  }
  get institutionId() {
    return this._institutionId;
  }
}
