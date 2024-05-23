import { ISharedNotesManager } from "../Interfaces/IsharedNotesManager";
import { LikeNote, LikeType } from "../Models/likes";
import { Note } from "../Models/notes";
import { User } from "../Models/users";

export class SharedNotesManager implements ISharedNotesManager {
  private _sharedNotes: Note[];
  private _votes: LikeNote[];
  public constructor() {
    this._sharedNotes = [];
    this._votes = [];
  }

  public getSharedNotes(): Note[] {
    return [...this._sharedNotes];
  }
  public likedNote(note: Note, user: User, vote: LikeType): LikeNote[] {
    if (vote === LikeType.Like) {
      const voteLike = {
        noteId: note.noteId,
        userId: user.userId,
        vote: LikeType.Like,
      };
      this._votes.push(voteLike);
    } else if (vote === LikeType.Dislike) {
      const votedislike = {
        noteId: note.noteId,
        userId: user.userId,
        vote: LikeType.Dislike,
      };
      this._votes.push(votedislike);
    }
    return [...this._votes];
  }
}
