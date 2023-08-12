import User from "../model/User.ts";

export default class UserCollection {
  static readonly users: User[] = [];

  // deno-lint-ignore require-await
  async add(user: User): Promise<void> {
    UserCollection.users.push(user);
  }

  // deno-lint-ignore require-await
  async searchByEmail(email: string): Promise<User | null> {
    return UserCollection.users.find((user) => user.email === email) ?? null;
  }
}
