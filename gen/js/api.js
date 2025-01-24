import {
  T4Encode,
  T3Decode,T5Decode,
  T0Encode, // CallEncode,
  T1Encode, //CallLiEncode,
  T2Decode // BinLiDecode
} from './_.pb.js'

import ireq from '@3-/ireq'

const [
  _setUrl,
  _reqNoArgs,
  _req,
  _batch
] = ireq(
  // err catch
  (code, res)=>{
    console.log('TODO err catch', code)
  },
  T0Encode, T1Encode, T2Decode,
)

export const batch = _batch;
export const setUrl = _setUrl;

export const captcha = _reqNoArgs(1,T3Decode) /* id:Box<[u8]>,img:Box<[u8]>,tip:Box<[u8]> */
export const authSigninMail = (address /* str */,password /* str */)=>_req(2,T4Encode([address,password]))
export const authSignupMail = (address /* str */,password /* str */)=>_req(3,T4Encode([address,password]))
export const authSignupMailVerify = (address /* str */,code /* str */)=>_req(4,T5Decode,T4Encode([address,code])) /* SIGNUP_MAIL_VERIFY:enum */