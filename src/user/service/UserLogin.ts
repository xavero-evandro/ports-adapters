import UseCase from "../../shared/UseCase.ts"
import CryptoInverter from "../../temp/CryptoInverter.ts"
import UserCollection from "../data/UserCollection.ts"
// import CryptoProvider from "../model/CryptoProvider.ts"
import User from "../model/User.ts"

export type UserLoginDTO = {
  email: string
  password: string
}

export default class UserLogin implements UseCase<UserLoginDTO, User> {
  // constructor(private crypto: CryptoProvider) {}

  async execute(userLogin: UserLoginDTO): Promise<User | null> {
    const collection = new UserCollection()
    const user = await collection.searchByEmail(userLogin.email)

    if (!user) return null

    const cryptoProvider = new CryptoInverter()
    const isEqual = await cryptoProvider.compare(
      userLogin.password,
      user.password!,
    )

    if (!isEqual) return null

    return {
      name: user.name,
      email: user.email,
    }
  }
}
