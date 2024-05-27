import { Note } from "../Models/notes";

export interface IMyNotesManager {
  createNote(
    title: string,
    text: string,
    file: string,
    isPublic: boolean,
    courseId: number,
    userId: number
  ): Note;
  deleteNote(noteId: number): void;
  getNotes(): Note[];
  isPubblicNote(note: Note): void;
}
