import { Note } from "../Models/notes";

export interface IMyNotesManager {
  addNote(note: Note): void;
  deleteNote(note: Note): void;
  getNotes(): Note[];
}
