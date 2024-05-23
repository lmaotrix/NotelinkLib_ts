import { NumericIdentityManager } from "@mantlebee/ts-core";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";

import { Course, Institution } from "../src/Models/institutionsAndCourses";
import { MyNotesManager } from "../src/Managers/myNotesManager";
import { Note } from "../src/Models/notes";
import { SharedNotesManager } from "../src/Managers/sharedNotesManager";
import { User, UserType } from "../src/Models/users";
import { LikeType } from "../src/Models/likes";

const idManager = new NumericIdentityManager();

const institution1: Institution = {
  institutionId: idManager.newValue(),
  institutionName: "Politecnico di Milano",
};
const course1: Course = {
  courseId: idManager.newValue(),
  courseName: "Matematica",
  institutionId: institution1.institutionId,
};
const user1: User = {
  email: "a.langhans@vesenda.com",
  firstName: "Ananda",
  institutionId: institution1.institutionId,
  lastName: "Langhans",
  type: UserType.Admin,
  userId: idManager.newValue(),
};

const note1: Note = {
  courseId: course1.courseId,
  file: "",
  institutionId: institution1.institutionId,
  isPublic: false,
  noteId: idManager.newValue(),
  text: "ciao",
  title: "sono la nota 1",
  userId: user1.userId,
};
const note2: Note = {
  courseId: course1.courseId,
  file: "",
  institutionId: institution1.institutionId,
  isPublic: true,
  noteId: idManager.newValue(),
  text: "ciao",
  title: "sono la nota 2",
  userId: user1.userId,
};
const note3: Note = {
  courseId: course1.courseId,
  file: "",
  institutionId: institution1.institutionId,
  isPublic: true,
  noteId: idManager.newValue(),
  text: "ciao",
  title: "sono la nota 3",
  userId: user1.userId,
};
const vote1 = {
  noteId: note2.noteId,
  userId: user1.userId,
  vote: LikeType.Like,
};
const vote2 = {
  noteId: note3.noteId,
  userId: user1.userId,
  vote: LikeType.Dislike,
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

  describe("Metodo deleteNote", () => {
    test("Elimina una nota della lista delle mie note", () => {
      const myNotesManager = getMyNotesManager();
      let notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1, note2]);
      myNotesManager.deleteNote(note1);
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([note2]);
    });
  });
});

describe("Class SharedNotesManager", () => {
  const sharedNotesManager = new SharedNotesManager();
  describe("Metodo addSharedNotes", () => {
    test("Aggiunge una nota pubblica nella lista delle note condivise", () => {
      const myNotesManager = getMyNotesManager();
      let sharedNotes = sharedNotesManager.getSharedNotes();
      expect(sharedNotes).toEqual([]);
      sharedNotesManager.addSharedNotes(myNotesManager.getNotes());
      sharedNotes = sharedNotesManager.getSharedNotes();
      expect(sharedNotes).toEqual([note2]);
    });
  });

  describe("Metodo likeANotes", () => {
    test("Mettere like ad una nota", () => {
      const myNotesManager = getMyNotesManager();
      sharedNotesManager.addSharedNotes(myNotesManager.getNotes());
      let sharedNotes = sharedNotesManager.getSharedNotes();
      expect(sharedNotes).toEqual([note2]);
      let votes = sharedNotesManager.likedNote(note2, user1, LikeType.Like);
      expect(votes).toEqual([vote1]);
      votes = sharedNotesManager.likedNote(note3, user1, LikeType.Dislike);
      expect(votes).toEqual([vote1, vote2]);
    });
  });
});
