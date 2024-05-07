import { ITextNoteManager } from "../Interfaces/ITextNoteManager";
import { TextNote } from "../Models/Notes";
import { User } from "../Models/User";

export class TextNoteManager implements ITextNoteManager {
  createTextNote(title: string, text: string, user: User): TextNote {
    throw new Error("Method not implemented.");
  }
  removeTextNote(textNote: TextNote): void {
    throw new Error("Method not implemented.");
  }
  updateTextNote(textNote: TextNote): TextNote {
    throw new Error("Method not implemented.");
  }
  likeTexNote(textNote: TextNote, user: User): void {
    throw new Error("Method not implemented.");
  }
  dislikeTextNote(textNote: TextNote, user: User): void {
    throw new Error("Method not implemented.");
  }
}
