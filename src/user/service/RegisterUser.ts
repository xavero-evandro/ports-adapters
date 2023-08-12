import UseCase from "../../shared/UseCase.ts"
import UserCollection from "../data/UserCollection.ts"
import User from "../model/User.ts"

export default class RegisterUser implements UseCase<Required<User>, void> {
  async execute(user: Required<User>): Promise<void> {
    const collection = new UserCollection()
    const passwordCrypto = user.password.split("").reverse().join("")
    const userCrypto = { ...user, password: passwordCrypto }
    await collection.add(userCrypto)
  }
}
