import { NumericIdentityManager } from "@mantlebee/ts-core";

import { ISharedNotesManager } from "../Interfaces/IsharedNotesManager";
import { Note } from "../Models/notes";
import { User } from "../Models/users";
import { MyNotesManager } from "./MyNotesManager";
import { LikeANotes } from "../Models/likes";

export class SharedNotesManager implements ISharedNotesManager {
  private _sharedNotes: Note[];
  private _likedNotes: LikeANotes[];

  public constructor() {
    this._sharedNotes = [];
    this._likedNotes = [];
  }
  public cloneOnMyNotes(note: Note, user: User): void {
    const myNotesManager = new MyNotesManager();
    myNotesManager.createNote(
      note.title,
      note.text,
      note.file,
      false,
      note.courseId,
      user.userId
    );
  }

  public getSharedNotes(allNotes: Note[]): Note[] {
    this._sharedNotes = allNotes.filter((a) => a.isPublic);
    return [...this._sharedNotes];
  }
  public getNoteLikes(noteId: number): LikeANotes | undefined {
    const note = this._likedNotes.find((a) => a.noteId === noteId);
    return note;
  }
  public getLikesOnNote(): LikeANotes[] {
    return [...this._likedNotes];
  }

  public likedNote(noteId: number, userId: number, liked: boolean): void {
    const existingLike = this._likedNotes.find((a) => a.noteId === noteId && a.userId === userId);
    
    if (existingLike) {
      // Update the existing like status
      existingLike.liked = liked;
    } else {
      // Add a new like
      const addLikeToANote = new LikeANotes(noteId, userId, liked);
      this._likedNotes.push(addLikeToANote);
    }
  }
}
