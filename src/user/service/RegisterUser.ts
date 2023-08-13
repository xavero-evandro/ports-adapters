import UseCase from "../../shared/UseCase.ts"
import CryptoInverter from "../../temp/CryptoInverter.ts"
import UserCollection from "../data/UserCollection.ts"
import User from "../model/User.ts"

export default class RegisterUser implements UseCase<Required<User>, void> {
  async execute(user: Required<User>): Promise<void> {
    const passwordCrypto = await new CryptoInverter().encrypt(user.password)
    const userCrypto = { ...user, password: passwordCrypto }
    const collection = new UserCollection()
    await collection.add(userCrypto)
  }
}
