export class LikeANotes {
  public liked: boolean;
  private _noteId: number;
  private _userId: number;
  public constructor(noteId: number, userId: number, liked: boolean) {
    this._noteId = noteId;
    this._userId = userId;
    this.liked = liked;
  }
  get noteId() {
    return this._noteId;
  }
  get userId() {
    return this._userId;
  }
}
