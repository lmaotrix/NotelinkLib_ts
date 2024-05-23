import { NumericIdentityManager } from "@mantlebee/ts-core";


export class Note {
  private _courseId: number;
  private _file: string;
  private _isPublic: boolean;
  private _noteId:number ;
  private _text: string;
  private _title: string;
  private _userId: number;
  public constructor(title: string, text: string,file: string, isPublic:boolean){
    this._title = title;
    this._text = text;
    this._file = file;
    this._isPublic = false;
    const idManager = new NumericIdentityManager();
    this._courseId = idManager.newValue();
    this._noteId = idManager.newValue();
    this._userId = idManager.newValue();
    
  }
};
