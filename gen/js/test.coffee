#!/usr/bin/env coffee

> ./api.js > captcha setUrl batch
  # ./_.pb.js > T0Encode:CallEncode T0Decode:CallDecode T1Encode:CallLiEncode T1Decode:CallLiDecode
  ./_.pb.js > T2Encode:BinLiEncode T2Decode:BinLiDecode

setUrl 'http://127.0.0.1:2025'

# console.log await captchaXxxFunc(3,6)

# [
#   id
#   img
#   tip
# ] = await captcha()
#
# console.log {id,img,tip}
#
# [
#   [id,img,tip]
# ] = await batch(
#   =>
#     captcha()
#     captcha()
#     return
# )
# console.log {id,img,tip}

bin = BinLiEncode([
  ,
  ,
  Buffer.from [222,2,3]
])
console.log BinLiDecode bin
