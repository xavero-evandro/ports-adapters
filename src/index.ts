import CryptoInverter from "./temp/CryptoInverter.ts"
import RegisterUser from "./user/service/RegisterUser.ts"
import UserLogin from "./user/service/UserLogin.ts"

const cryptoProvider = new CryptoInverter()
const register = new RegisterUser(cryptoProvider)

await register.execute({
  name: "John Doe",
  email: "john@john.land",
  password: "123456",
})

const login = new UserLogin(cryptoProvider)

const user = await login.execute({
  email: "john@john.land",
  password: "123456",
})
console.log(`### - user:`, user)
