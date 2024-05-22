export type Institution = {
  institutionId: number;
  institutionName: string;
};

export type Course = {
  courseId: number;
  courseName: string;
  institutionId: number;
};
