import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";
import { Note } from "../src/Models/notes";
import { Course, Institution } from "../src/Models/institutionsAndCourses";
import { User, UserType } from "../src/Models/users";
import { MyNotesManager } from "../src/Managers/myNotesManager";
import { SharedNotesManager } from "../src/Managers/sharedNotesManager";

const institution1: Institution = {
  institutionId: Math.random(),
  institutionName: "Politecnico di Milano",
};
const course1: Course = {
  courseId: Math.random(),
  courseName: "Matematica",
  institutionId: institution1.institutionId,
};
const user1: User = {
  email: "a.langhans@vesenda.com",
  firstName: "Ananda",
  institutionId: institution1.institutionId,
  lastName: "Langhans",
  type: UserType.Admin,
  userId: Math.random(),
};

const note1: Note = {
  courseId: course1.courseId,
  file: "",
  institutionId: institution1.institutionId,
  isPublic: false,
  noteId: Math.random(),
  text: "ciao",
  title: "sono la nota 1",
  userId: user1.userId,
};
const note2: Note = {
  courseId: course1.courseId,
  file: "",
  institutionId: institution1.institutionId,
  isPublic: true,
  noteId: Math.random(),
  text: "ciao",
  title: "sono la nota 2",
  userId: user1.userId,
};

function getMyNotesManager(): MyNotesManager {
  const myNotesManager = new MyNotesManager();
  myNotesManager.addNote(note1);
  myNotesManager.addNote(note2);
  return myNotesManager;
}

describe("Class MyNotesManager", () => {
  describe("Metodo addNote", () => {
    test("Aggiunge una o più note", () => {
      const myNotesManager = new MyNotesManager();
      let notes = myNotesManager.getNotes();
      expect(notes).toEqual([]);
      myNotesManager.addNote(note1);
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1]);
      myNotesManager.addNote(note2);
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1, note2]);
    });
  });
});

describe("Class SharedNotesManager", () => {
  describe("Metodo addSharedNotes", () => {
    test("Aggiunge una nota pubblica nella lista delle note condivise", () => {
      const sharedNotesManager = new SharedNotesManager();
      const myNotesManager = getMyNotesManager();
      let sharedNotes = sharedNotesManager.getSharedNotes();
      expect(sharedNotes).toEqual([]);
      sharedNotesManager.addSharedNotes(myNotesManager.getNotes());
      sharedNotes = sharedNotesManager.getSharedNotes();
      expect(sharedNotes).toEqual([note2]);
    });
  });
});
