import { IMyNotesManager } from "../Interfaces/IMyNotesManager";
import { Note } from "../Models/notes";

export class MyNotesManager implements IMyNotesManager {
  private _notes: Note[];
  public constructor() {
    this._notes = [];
  }

  public createNote(
    title: string,
    text: string,
    file: string,
    isPublic: boolean,
    courseId: number,
    noteId: number,
    userId: number
  ): Note {
    const note = new Note(
      title,
      text,
      file,
      isPublic,
      courseId,
      noteId,
      userId
    );
    this._notes.push(note);
    return note;
  }
  public deleteNote(note: Note): void {
    this._notes = this._notes.filter((a) => a !== note);
  }
  getNotes(): Note[] {
    return [...this._notes];
  }
}
