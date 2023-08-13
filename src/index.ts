import RegisterUser from "./user/service/RegisterUser.ts"
import UserLogin from "./user/service/UserLogin.ts"

const register = new RegisterUser()

await register.execute({
  name: "John Doe",
  email: "john@john.land",
  password: "123456",
})

const login = new UserLogin()

const user = await login.execute({
  email: "john@john.land",
  password: "123456",
})
console.log(`### - user:`, user)
