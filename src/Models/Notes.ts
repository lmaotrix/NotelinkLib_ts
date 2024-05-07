export type TextNote = {
  userId: number;
  textNoteId: number;
  title: string;
  text: string;
  createdAt: Date;
  subjectId: number;
  courseId: number;
  institutionId: number;
};

export type FileNote = {
  userId: number;
  fileNoteId: number;
  title: string;
  file: URL;
  createdAt: Date;
  subjectId: number;
  courseId: number;
  institutionId: number;
};

type Note = {
  userId: number;
  title: string;
  text: string;
  file: URL;
  createdAt: Date;
  subjectId: number;
  courseId: number;
  institutionId: number;
};
