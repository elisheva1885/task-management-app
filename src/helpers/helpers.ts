
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { configData } from '../config/config.js';
export const comparePassword = async(clinetPass : string , dbPass : string) : Promise<Boolean>=> {
    const match = await bcrypt.compare(clinetPass, dbPass)
    return match;
}

export const generateToken= (userInfo : Object) :  string=> {
    return jwt.sign(userInfo, configData.jwt)
}