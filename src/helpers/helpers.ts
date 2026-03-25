
import bcrypt from 'bcrypt'
import jwt, { type SignOptions } from 'jsonwebtoken'
import { configEnvironmentData } from '../config/config.js';
export type UserInfo = {
    id: string;
    username: string
}

export const comparePassword = async (clinetPass: string, dbPass: string): Promise<boolean> => {
    return await bcrypt.compare(clinetPass, dbPass)
}

export const generateToken = (userInfo: UserInfo): string => {
    return jwt.sign(userInfo, configEnvironmentData.jwt, { expiresIn : configEnvironmentData.expiresIn });
}

