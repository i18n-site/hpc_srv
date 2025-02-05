#!/usr/bin/env coffee

> ./api.js > captcha setUrl
  # ./_.pb.js > T0Encode:CallEncode T0Decode:CallDecode T1Encode:CallLiEncode T1Decode:CallLiDecode
  ./_.pb.js > T2Encode:BinLiEncode T2Decode:BinLiDecode

# for nginx https proxy use this
# setUrl 'https://127.0.0.1:7776'

setUrl 'http://127.0.0.1:2025'

[
  id
  img
  tip
] = await captcha()

console.log {id}

[
  [id1,img,tip]
  [id2,img,tip]
] = await Promise.all [
  captcha()
  captcha()
]
console.log {id1,id2}

setTimeout =>
  [id2,img,tip] = await captcha()
  console.log {id2}
  return

[id1,img,tip] = await captcha()
console.log {id1}
