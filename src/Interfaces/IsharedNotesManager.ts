import { Note } from "../Models/notes";
import { User } from "../Models/users";

export interface ISharedNotesManager {
  addToMyNotes(note: Note): Note;
  getSharedNotes(allNotes: Note[]): Note[];
  likedNote(noteId: number, userId: number, liked: boolean): void;
}
