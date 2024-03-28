import { appendFile, writeFileSync } from "fs"
import crypto from 'crypto'

export class Utils {
  static prepareNotes() {
    writeFileSync("notes", "### End-to-end notes:\n\n")
  }

  static appendToNotes(message: string) {
    console.info("Adding to notes:", message)
    appendFile("notes", message + "\n", (err) => {
      if (err) console.error(err)
    })
  }

  static async repeat(times: number, callback: () => Promise<void>) {
    for (let i = 0; i < times; i++) {
      await callback()
    }
  }

  static async retry<T>(times: number, callback: () => Promise<T>) {
    let retry = 0
    let delegateError = null
    while (retry < times) {
      try {
        return await callback()
      } catch (err) {
        Utils.appendToNotes(`Failure: ${err.message}. Trying to run again.`)
        delegateError = err
      }
      retry++
    }
    let error = Error(`${delegateError.message} afer retrying [${times}] times`)
    error.stack = delegateError.stack
    throw error
  }

  static generateNonce(length: number): string {
    const bytesNeeded = Math.ceil(length * 0.75)
    const randomBytes = crypto.randomBytes(bytesNeeded)

    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(i * 0.75)
      const randomByte = randomBytes[randomIndex];
      const randomDigit = randomByte % 10
      result += randomDigit.toString()
    }
    return result;
  }
}
