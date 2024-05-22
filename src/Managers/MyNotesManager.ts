import { IMyNotesManager } from "../Interfaces/IMyNotesManager";
import { Note } from "../Models/Notes";

class MyNotesManager implements IMyNotesManager{
    private _notes: Note[];
    public constructor(){
        this._notes: []; 
    }

    
    public addNote(note: Note): void {
        this._notes.push(note);
    }

}