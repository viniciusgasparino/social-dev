import bcryptjs from "bcryptjs"

export const hashPassword = (password) => {
  return bcryptjs.hashSync(password)
}

export const comparePassword = (password,hash) => {
  return bcryptjs.compareSync(password,hash)
}