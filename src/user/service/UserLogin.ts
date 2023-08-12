import UseCase from "../../shared/UseCase.ts"
import UserCollection from "../data/UserCollection.ts"
import User from "../model/User.ts"

export type UserLoginDTO = {
  email: string
  password: string
}

export default class UserLogin implements UseCase<UserLoginDTO, User> {
  async execute(userLogin: UserLoginDTO): Promise<User | null> {
    const collection = new UserCollection()
    const user = await collection.searchByEmail(userLogin.email)

    if (!user) return null

    const passwordCrypto = userLogin.password.split("").reverse().join("")
    if (user.password !== passwordCrypto) return null

    return {
      name: user.name,
      email: user.email,
    }
  }
}
