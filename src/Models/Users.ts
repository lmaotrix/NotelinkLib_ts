export type User = {
  email: string;
  firstName: string;
  institutionId: number; 
  lastName: string;
  noteId: number;
  type: UserType;
  userId: number;
};

enum UserType {
  Admin,
  Student,
}
