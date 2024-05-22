import { ISharedNotesManager } from "../Interfaces/IsharedNotesManager";
import { Note } from "../Models/notes";

export class SharedNotesManager implements ISharedNotesManager {
  private _sharedNotes: Note[];
  public constructor() {
    this._sharedNotes = [];
  }
  addSharedNotes(notes: Note[]): void {
    this._sharedNotes = notes.filter((a) => a.isPublic);
  }

  getSharedNotes(): Note[] {
    return [...this._sharedNotes];
  }
}
