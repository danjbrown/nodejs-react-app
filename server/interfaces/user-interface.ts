export interface IUser {
  readonly email: string;
  readonly username: string;
  getUsername(): string;
  getEmail(): string;
}