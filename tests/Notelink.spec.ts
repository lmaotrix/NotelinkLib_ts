import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";

// import { NumericIdentityManager } from "@mantlebee/ts-core";

import { Course } from "../src/Models/courses";
import { Institution } from "../src/Models/institutions";
import { Note } from "../src/Models/notes";
import { User } from "../src/Models/users";
import { MyNotesManager } from "../src/Managers/myNotesManager";
import { NoteLinkManager } from "../src/Managers/noteLinkManager";

// const idManager = new NumericIdentityManager();
const noteLinkManager = new NoteLinkManager();
const poliInstitution = noteLinkManager.createInstitution(
  "Politecnico di Milano"
);
const matematicaCourse = noteLinkManager.createCourse(
  "Matematica",
  poliInstitution.institutionId
);
const anandaUser = noteLinkManager.createUser(
  "Ananda",
  "Langhans",
  "a.langhans@vesenda.com",
  poliInstitution.institutionId
);
const myNotesManager = new MyNotesManager();
const nota1 = new Note(
  "Note1",
  "sono la nota 1",
  "",
  true,
  matematicaCourse.courseId,
  1,
  anandaUser.userId
);
const nota2 = new Note(
  "Note2",
  "sono la nota 2",
  "",
  false,
  matematicaCourse.courseId,
  2,
  anandaUser.userId
);

describe("Class MyNotesManager", () => {
  describe("Metodo createNote", () => {
    test("Crea una o più note", () => {
      let notes = myNotesManager.getNotes();
      expect(notes).toEqual([]);
      const note1 = myNotesManager.createNote(
        "Note1",
        "sono la nota 1",
        "",
        true,
        matematicaCourse.courseId,
        anandaUser.userId
      );
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1]);
      const note2 = myNotesManager.createNote(
        "Note2",
        "sono la nota 2",
        "",
        false,
        matematicaCourse.courseId,
        anandaUser.userId
      );
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1, note2]);
    });
  });

  describe("Metodo deleteNote", () => {
    test("Elimina una nota della lista delle mie note", () => {
      let notes = myNotesManager.getNotes();
      expect(notes).toEqual([nota1, nota2]);
      myNotesManager.deleteNote(nota1.noteId);
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([nota2]);
    });
  });
  describe("Metodo isPublicNote", () => {
    test("Settare una nota come pubblica", () => {
      let notes = myNotesManager.getNotes();
      expect(notes).toEqual([nota2]);
      expect(nota2.isPublic).toEqual(false);
      myNotesManager.isPubblicNote;
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([nota2]);
      expect(nota2.isPublic).toEqual(true);
    });
  });
});

// describe("Class SharedNotesManager", () => {
//   const sharedNotesManager = new SharedNotesManager();
//   describe("Metodo addSharedNotes", () => {
//     test("Aggiunge una nota pubblica nella lista delle note condivise", () => {
//       const myNotesManager = getMyNotesManager();
//       let sharedNotes = sharedNotesManager.getSharedNotes();
//       expect(sharedNotes).toEqual([]);
//       sharedNotesManager.addSharedNotes(myNotesManager.getNotes());
//       sharedNotes = sharedNotesManager.getSharedNotes();
//       expect(sharedNotes).toEqual([note2]);
//     });
//});

//   describe("Metodo likeANotes", () => {
//     test("Mettere like ad una nota", () => {
//       const myNotesManager = getMyNotesManager();
//       sharedNotesManager.addSharedNotes(myNotesManager.getNotes());
//       let sharedNotes = sharedNotesManager.getSharedNotes();
//       expect(sharedNotes).toEqual([note2]);
//       let votes = sharedNotesManager.likedNote(note2, user1, LikeType.Like);
//       expect(votes).toEqual([vote1]);
//       votes = sharedNotesManager.likedNote(note3, user1, LikeType.Dislike);
//       expect(votes).toEqual([vote1, vote2]);
//     });
//   });
//});
