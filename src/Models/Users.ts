export type User = {
  email: string;
  firstName: string;
  institutionId: number;
  lastName: string;
  type: UserType;
  userId: number;
};

export enum UserType {
  Admin,
  Student,
}
