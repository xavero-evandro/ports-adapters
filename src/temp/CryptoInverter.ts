import CryptoProvider from "../user/model/CryptoProvider.ts"

export default class CryptoInverter implements CryptoProvider {
  // deno-lint-ignore require-await
  async encrypt(password: string): Promise<string> {
    return password.split("").reverse().join("")
  }

  // deno-lint-ignore require-await
  async compare(password: string, hash: string): Promise<boolean> {
    return password.split("").reverse().join("") === hash
  }
}
