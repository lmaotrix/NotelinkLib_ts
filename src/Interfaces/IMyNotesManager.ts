import { Note } from "../Models/notes";

export interface IMyNotesManager {
  createNote(
    title: string,
    text: string,
    file: string,
    isPublic: boolean
  ): Note;
  deleteNote(note: Note): void;
  getNotes(): Note[];
  isPublicNote(note: Note): void;
}
