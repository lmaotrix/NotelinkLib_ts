import { IFileNoteManager } from "../Interfaces/IFileNoteManager";
import { FileNote } from "../Models/Notes";
import { User } from "../Models/User";

export class FileNoteManager implements IFileNoteManager {
  addFileNote(fileNote: FileNote): void {
    throw new Error("Method not implemented.");
  }
  removeFileNote(fileNote: FileNote): void {
    throw new Error("Method not implemented.");
  }
  likeFileNote(fileNote: FileNote, user: User): void {
    throw new Error("Method not implemented.");
  }
  unlikeFileNote(fileNote: FileNote, user: User): void {
    throw new Error("Method not implemented.");
  }
}
