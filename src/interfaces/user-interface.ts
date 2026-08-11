export interface IUser {
  readonly email: string;
  readonly username: string;
  getName(): string;
  getEmail(): string;
}