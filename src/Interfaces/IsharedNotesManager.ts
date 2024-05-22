import { Note } from "../Models/notes";
export interface ISharedNotesManager {
  addSharedNotes(notes: Note[]): void;
  getSharedNotes(): Note[];
}
