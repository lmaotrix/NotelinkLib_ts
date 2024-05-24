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
    const index = this._notes.indexOf(note);
    if (index !== -1) this._notes.splice(index, 1);
  }
  getNotes(): Note[] {
    return [...this._notes];
  }
}
