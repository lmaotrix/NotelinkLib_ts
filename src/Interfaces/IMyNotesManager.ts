import { Note } from "../Models/Notes";

export interface IMyNotesManager{
    addNote(note:Note): void;
}