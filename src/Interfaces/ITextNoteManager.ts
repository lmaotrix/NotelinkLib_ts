import { TextNote } from "../Models/Notes";
import { User } from "../Models/User";

export interface ITextNoteManager {
  createTextNote(title: string, text: string, user: User): TextNote;
  removeTextNote(textNote: TextNote): void;
  updateTextNote(textNote: TextNote): TextNote;
  likeTexNote(textNote: TextNote, user: User): void;
  unlikeTextNote(textNote: TextNote, user: User): void;
}
