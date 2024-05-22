import { IMyNotesManager } from "../Interfaces/ImyNotesManager";
import { Note } from "../Models/notes";

export class MyNotesManager implements IMyNotesManager {
  private _notes: Note[];
  public constructor() {
    this._notes = [];
  }

  addNote(note: Note): void {
    this._notes.push(note);
  }
  getNotes(): Note[] {
    return [...this._notes];
  }
}
