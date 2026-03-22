import bycrpt from 'bcrypt'
import zxcvbn  from 'zxcvbn'


export const encryptionPassword = (password: string): string => {
   return bycrpt.hashSync(password, 10);
}

export const passwordScore = (password: string) : number=> {
   return zxcvbn(password).score;
}