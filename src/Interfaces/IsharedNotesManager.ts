import { LikeANotes } from "../Models/likes";
import { Note } from "../Models/notes";
import { User } from "../Models/users";

export interface ISharedNotesManager {
  cloneOnMyNotes(note: Note, user: User): void;
  likedNote(noteId: number, userId: number, liked: boolean): void;
  getNoteLikes(noteId: number): LikeANotes | undefined;
  getLikesOnNote(): LikeANotes[];
  getSharedNotes(allNotes: Note[]): Note[];
}
