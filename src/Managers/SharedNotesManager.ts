import { NumericIdentityManager } from "@mantlebee/ts-core";

import { ISharedNotesManager } from "../Interfaces/IsharedNotesManager";
import { Note } from "../Models/notes";

export class SharedNotesManager implements ISharedNotesManager {
  private _sharedNotes: Note[];

  public constructor() {
    this._sharedNotes = [];
  }

  // addToMyNotes(note: Note): Note {
  //   const idManager = new NumericIdentityManager();
  //   const clonedNote = new Note(
  //     note.title,
  //     note.text,
  //     "",
  //     false,
  //     note.courseId,
  //     idManager.newValue(),
  //     note.userId
  //   );
  //   return clonedNote;
  // }
  getSharedNotes(allNotes: Note[]): Note[] {
    this._sharedNotes = allNotes.filter((a) => a.isPublic);
    return [...this._sharedNotes];
  }
  likedNote(noteId: number, userId: number, liked: boolean): void {
    throw new Error("Method not implemented.");
  }

  // public likedNote(note: Note, user: User, vote: LikeType): LikeNote[] {
  //   if (vote === LikeType.Like) {
  //     const voteLike = {
  //       noteId: note.noteId,
  //       userId: user.userId,
  //       vote: LikeType.Like,
  //     };
  //     this._votes.push(voteLike);
  //   } else if (vote === LikeType.Dislike) {
  //     const votedislike = {
  //       noteId: note.noteId,
  //       userId: user.userId,
  //       vote: LikeType.Dislike,
  //     };
  //     this._votes.push(votedislike);
  //   }
  //   return [...this._votes];
  // }
}
