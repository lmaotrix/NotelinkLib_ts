import { FileNote } from "../Models/Notes";
import { User } from "../Models/User";

export interface IFileNoteManager {
  addFileNote(fileNote: FileNote): void;
  removeFileNote(fileNote: FileNote): void;
  likeFileNote(fileNote: FileNote, user: User): void;
  dislikeFileNote(fileNote: FileNote, user: User): void;
}
