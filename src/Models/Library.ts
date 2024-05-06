import { FileNote, TextNote } from "./Notes";
export type Institution = {
  istitutionId: number;
  istitutionName: string;
};

export type Course = {
  courseId: number;
  courseName: string;
};

export type Subject = {
  subjectId: number;
  subjectName: string;
};

export type Library = {
  istitutionId: number;
  courseId: number;
  subjectId: number;
  notes: FileNote[] | TextNote[];
};
