import { INote } from "../Interfaces/INoteManager";
import { User } from "./users";

export class Note implements INote {
  private _courseId: number;
  private _file: string;
  private _isPublic: boolean;
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
    this._isPublic = isPublic;
    this._courseId = courseId;
    this._noteId = noteId;
    this._userId = userId;
  }

  toggleisPublic() {
    this._isPublic = !this._isPublic;
  }
}
