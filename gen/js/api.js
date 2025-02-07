import {
  T2Encode,
  T1Decode,T3Decode,
  T0Encode, //CallLiEncode,
  T0Decode // BinLiDecode
} from './_.pb.js'

import hpc from 'u/hpc.js'

const [
  _set,
  _noArgs,
  _req
] = hpc(T0Encode, T0Decode)

export const set = _set;

export const captcha = _noArgs(1,T1Decode) /* id:Box<[u8]>,img:Box<[u8]>,tip:Box<[u8]> */
export const authSigninMail = (address /* str */,password /* str */)=>_req(2,T2Encode([address,password]))
export const authSignupMail = (address /* str */,password /* str */)=>_req(3,T2Encode([address,password]))
export const authSignupMailVerify = (address /* str */,code /* str */)=>_req(4,T3Decode,T2Encode([address,code])) /* SIGNUP_MAIL_VERIFY:enum */