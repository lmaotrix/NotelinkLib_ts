import { NumericIdentityManager } from "@mantlebee/ts-core";

import { IMyNotesManager } from "../Interfaces/IMyNotesManager";
import { Note } from "../Models/notes";

export class MyNotesManager implements IMyNotesManager {
  private _notes: Note[];
  private _count: number;
  public constructor() {
    this._notes = [];
    this._count = 0;
  }

  public createNote(
    title: string,
    text: string,
    file: string,
    isPublic: boolean,
    courseId: number,
    userId: number
  ): Note {
    // const idManager = new NumericIdentityManager();
    // let noteId = idManager.newValue();
    let noteId = ++this._count;
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
  public deleteNote(noteId: number): void {
    this._notes = this._notes.filter((a) => a.noteId !== noteId);
  }

  getNotes(): Note[] {
    return [...this._notes];
  }
  isPubblicNote(note: Note): void {
    note.isPublic = true;
  }
}
