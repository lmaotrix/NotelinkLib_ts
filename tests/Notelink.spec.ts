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

import { Note } from "../src/Models/notes";
import { MyNotesManager } from "../src/Managers/MyNotesManager";
import { NoteLinkManager } from "../src/Managers/noteLinkManager";
import { SharedNotesManager } from "../src/Managers/SharedNotesManager";
import { LikeANotes } from "../src/Models/likes";

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
const nota3 = new Note(
  "Note3",
  "sono la nota 3",
  "",
  true,
  matematicaCourse.courseId,
  3,
  anandaUser.userId
);
const liketest = new LikeANotes(nota3.noteId, nota3.userId, true);
describe("Class MyNotesManager", () => {
  describe("Metodo createNote", () => {
    test("Crea una o più note", () => {
      let myNotes = myNotesManager.getNotes();
      expect(myNotes).toEqual([]);
      const note1 = myNotesManager.createNote(
        "Note1",
        "sono la nota 1",
        "",
        true,
        matematicaCourse.courseId,
        anandaUser.userId
      );
      myNotes = myNotesManager.getNotes();
      expect(myNotes).toEqual([note1]);
      const note2 = myNotesManager.createNote(
        "Note2",
        "sono la nota 2",
        "",
        false,
        matematicaCourse.courseId,
        anandaUser.userId
      );
      myNotes = myNotesManager.getNotes();
      expect(myNotes).toEqual([note1, note2]);
    });
  });

  describe("Metodo deleteNote", () => {
    test("Elimina una nota della lista delle mie note", () => {
      let myNotes = myNotesManager.getNotes();
      expect(myNotes).toEqual([nota1, nota2]);
      myNotesManager.deleteNote(nota1.noteId);
      myNotes = myNotesManager.getNotes();
      expect(myNotes).toEqual([nota2]);
    });
  });
  describe("Metodo isPublicNote", () => {
    test("Settare una nota come pubblica", () => {
      let myNotes = myNotesManager.getNotes();
      expect(myNotes).toEqual([nota2]);
      expect(nota2.isPublic).toEqual(false);
      myNotesManager.isPubblicNote(nota2);
      myNotes = myNotesManager.getNotes();
      expect(nota2.isPublic).toEqual(true);
      myNotesManager.isPubblicNote(nota2);
      myNotes = myNotesManager.getNotes();
      expect(nota2.isPublic).toEqual(false);
    });
  });
});

describe("Class SharedNotesManager", () => {
  const sharedNotesManager = new SharedNotesManager();
  describe("Metodo getSharedNotes", () => {
    test("Aggiunge una nota pubblica nella lista delle note condivise", () => {
      const note3 = myNotesManager.createNote(
        "Note3",
        "sono la nota 3",
        "",
        true,
        matematicaCourse.courseId,
        anandaUser.userId
      );
      let myNotes = myNotesManager.getNotes();
      expect(myNotes).toEqual([nota2, nota3]);
      const sharedNotes = sharedNotesManager.getSharedNotes(myNotes);
      expect(sharedNotes).toEqual([nota3]);
    });
  });

  // describe("Metodo cloneOnMyNotes", () => {
  //   test("Il metodo deve clonare una nota pubblica nelle mie note", () => {
  //     let myNotes = myNotesManager.getNotes();
  //     expect(myNotes).toEqual([nota2, nota3]);
  //     sharedNotesManager.cloneOnMyNotes(nota2, anandaUser);
  //     myNotes = myNotesManager.getNotes();
  //     expect(myNotes).toEqual([nota2, nota3, nota2]);
  //     // non funziona ???
  //   });
  //});

  describe("Metodo likeANotes", () => {
    test("Mettere like ad una nota", () => {
      let likeNotes = sharedNotesManager.getLikesOnNote();
      expect(likeNotes).toEqual([]);
      sharedNotesManager.likedNote(nota3.noteId, nota3.userId, true);
      likeNotes = sharedNotesManager.getLikesOnNote();
      expect(likeNotes).toEqual([liketest]);
      sharedNotesManager.likedNote(nota3.noteId, nota3.userId, true);
      likeNotes = sharedNotesManager.getLikesOnNote();
expect(likeNotes).toEqual([liketest]);
      
    });
  });
});
