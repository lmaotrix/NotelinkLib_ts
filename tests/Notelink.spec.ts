import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";

import { NumericIdentityManager } from "@mantlebee/ts-core";

import { Course } from "../src/Models/courses";
import { Institution } from "../src/Models/institutions";
import { Note } from "../src/Models/notes";
import { User } from "../src/Models/users";
import { MyNotesManager } from "../src/Managers/myNotesManager";

const idManager = new NumericIdentityManager();

const poliInstitution = new Institution(
  "Politecnico di Milano",
  idManager.newValue()
);
const matematicaCourse = new Course(
  "Matematica",
  poliInstitution.institutionId,
  idManager.newValue()
);
const anandaUser = new User(
  "Ananda",
  "Langhans",
  "a.langhans@vesenda.com",
  poliInstitution.institutionId,
  idManager.newValue()
);

const note1 = new Note(
  "Nota1",
  "Sono la nota 1",
  "",
  true,
  matematicaCourse.courseId,
  1,
  anandaUser.userId
);
const note2 = new Note(
  "Nota2",
  "Sono la nota 2",
  "",
  false,
  matematicaCourse.courseId,
  2,
  anandaUser.userId
);

describe("Class MyNotesManager", () => {
  const myNotesManager = new MyNotesManager();
  describe("Metodo createNote", () => {
    test("Crea una o più note", () => {
      let notes = myNotesManager.getNotes();
      expect(notes).toEqual([]);
      myNotesManager.createNote(
        "Nota1",
        "Sono la nota 1",
        "",
        true,
        matematicaCourse.courseId,
        idManager.newValue(),
        anandaUser.userId
      );
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1]);
      myNotesManager.createNote(
        "Nota2",
        "Sono la nota 2",
        "",
        false,
        matematicaCourse.courseId,
        idManager.newValue(),
        anandaUser.userId
      );
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1, note2]);
    });
  });

  describe("Metodo deleteNote", () => {
    test("Elimina una nota della lista delle mie note", () => {
      let notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1, note2]);
      myNotesManager.deleteNote(note1);
      notes = myNotesManager.getNotes();
      expect(notes).toEqual([note1]);
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
