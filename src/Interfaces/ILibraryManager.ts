import { Institution, Course, Subject, Library } from "../Models/Library";
import { FileNote, Note, TextNote } from "../Models/Notes";

export interface ILibraryManager {
  createLibrary(
    institution: Institution,
    course: Course,
    subject: Subject,
    note: Note
  ): Library;
  removeLibrary(library: Library): void;
  addFileinLibrary(fileNote: FileNote, library: Library): void;
  addTextFileinLibrary(textNote: TextNote, library: Library): void;
}
