import { IMyNotesManager } from "../Interfaces/IMyNotesManager";
import { Note } from "../Models/notes";

export class MyNotesManager implements IMyNotesManager {
  private _notes: Note[];
  public constructor() {
    this._notes = [];
  }
  getNotes(): Note[] {
    return [...this._notes];
  }
  isPublicNote(note: Note): void {
    throw new Error("Method not implemented.");
  }

  public createNote(
    title: string,
    text: string,
    file: string,
    isPublic: boolean
  ): Note {
    const note = new Note(title, text, file, isPublic);
    this._notes.push(note);
    return note;
  }
  public deleteNote(note: Note): void {
    this._notes = this._notes.filter((a) => a !== note);
  }
}
