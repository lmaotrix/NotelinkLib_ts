import { Note } from "../Models/notes";

export interface IMyNotesManager {
  createNote(
    title: string,
    text: string,
    file: string,
    isPublic: boolean,
    courseId: number,
    noteId: number,
    userId: number
  ): Note;
  deleteNote(note: Note): void;
  getNotes(): Note[];
}
