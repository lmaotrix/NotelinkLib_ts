import { IMyNotesManager } from "../Interfaces/IMyNotesManager";
import { Note } from "../Models/notes";

export class MyNotesManager implements IMyNotesManager {
  private _notes: Note[];
  public constructor() {
    this._notes = [];
  }

  public addNote(note: Note): void {
    this._notes.push(note);
  }
  deleteNote(note: Note): void {
    this._notes = this._notes.filter((a) => a !== note);
  }
  public getNotes(): Note[] {
    return [...this._notes];
  }
}
