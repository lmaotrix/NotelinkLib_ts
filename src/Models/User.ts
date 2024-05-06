export type User = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: UserType;
};

enum UserType {
  Admin,
  Student,
}
