import { ILibraryManager } from "../Interfaces/ILibraryManager";
import { Institution, Course, Subject, Library } from "../Models/Library";
import { Note, FileNote, TextNote } from "../Models/Notes";

export class LibraryManager implements ILibraryManager {
  createLibrary(
    institution: Institution,
    course: Course,
    subject: Subject,
    note: Note
  ): Library {
    throw new Error("Method not implemented.");
  }
  removeLibrary(library: Library): void {
    throw new Error("Method not implemented.");
  }
  addFileinLibrary(fileNote: FileNote, library: Library): void {
    throw new Error("Method not implemented.");
  }
  addTextFileinLibrary(textNote: TextNote, library: Library): void {
    throw new Error("Method not implemented.");
  }
}
