export class Note {
  private _courseId: number;
  private _file: string;
  public isPublic: boolean;
  private _noteId: number;
  private _text: string;
  private _title: string;
  private _userId: number;
  public constructor(
    title: string,
    text: string,
    file: string,
    isPublic: boolean,
    courseId: number,
    noteId: number,
    userId: number
  ) {
    this._title = title;
    this._text = text;
    this._file = file;
    this.isPublic = isPublic;
    this._courseId = courseId;
    this._noteId = noteId;
    this._userId = userId;
  }

  get noteId() {
    return this._noteId;
  }
}
