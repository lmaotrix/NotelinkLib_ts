import { LikeNote, LikeType } from "../Models/likes";
import { Note } from "../Models/notes";
import { User } from "../Models/users";

export interface ISharedNotesManager {
  getSharedNotes(notes: Note[]): Note[];
  likedNote(note: Note, user: User, liked: boolean): void;
  addToMyNotes(note: Note): void;
}
