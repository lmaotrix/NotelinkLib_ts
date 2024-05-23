import { NumericIdentityManager } from "@mantlebee/ts-core";

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
  get courseId() {
    return this._courseId;
  }
  get file() {
    return this._file;
  }
  get isPublic() {
    return this._isPublic;
  }
  get text() {
    return this._text;
  }
  get title() {
    return this._title;
  }
  get userId() {
    return this._userId;
  }
  toggleisPublic() {
    this._isPublic = !this._isPublic;
  }
}
