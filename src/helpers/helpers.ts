import bycrpt from 'bcrypt'


export const encryptionPassword = (password: string): string => {
   return bycrpt.hashSync(password, 10);
}