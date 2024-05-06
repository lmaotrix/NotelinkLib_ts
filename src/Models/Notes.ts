export type TextNote = {
  userId: number;
  textNoteId: number;
  title: string;
  text: string;
  createdAt: Date;
};

export type FileNote = {
  userId: number;
  fileNoteId: number;
  title: string;
  file: URL;
  createdAt: Date;
};

export type Note = {
  textNote: TextNote;
  fileNote: FileNote;
};
