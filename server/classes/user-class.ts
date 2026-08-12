import { IUser } from '../interfaces/user-interface.js';

export class User implements IUser {
  public constructor(readonly username: string, readonly email: string) {}

  public getName(): string {
    return this.username;
  }

  public getEmail(): string {
    return this.email;
  }
}
