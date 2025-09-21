// 打怪升级
// http链接
// 链接完成后 升级为 ws 链接
// ws 链接
// ws 消息收发


// 1.创建 http 服务
import http from 'http'
import crypto from 'crypto'
const server = http.createServer((req, res) => {
    const errorCode = 400;
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`http ${errorCode}`)
})

// 2.升级协议
// server.on('upgrade', (req, socket, head) => {
//     console.log('upgrade', req.headers)
//     // 协议升级的握手
//     if (req.headers['upgrade'] !== 'websocket') {
//         socket.end('HTTP/1.1 400 Bad Request')
//         return
//     }
//     // 计算 Sec-WebSocket-Accept
//     const crypto = require('crypto')
//     const secWebSocketKey = req.headers['sec-websocket-key']
//     const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
//     const hash = crypto.createHash('sha1')
//         .update(secWebSocketKey + GUID)
//         .digest('base64')
//     // 响应头
//     const responseHeaders = [
//         'HTTP/1.1 101 Switching Protocols',
//         'Upgrade: websocket',
//         'Connection: Upgrade',
//         `Sec-WebSocket-Accept: ${hash}`
//     ]
//     // 写入响应头
//     socket.write(responseHeaders.join('\r\n') + '\r\n\r\n')
    
//     // 3.处理数据帧
//     socket.on('data', (buffer) => {
//         console.log('buffer', buffer)
//         const firstByte = buffer[0]
//         const opCode = firstByte & 0x0f
//         const secondByte = buffer[1]
//         const isMasked = (secondByte & 0x80) !== 0
//         let payloadLength = secondByte & 0x7f
//         let currentOffset = 2
//         if (payloadLength === 126) {
//             payloadLength = buffer.readUInt16BE(currentOffset)
//             currentOffset += 2
//         }
//         else if (payloadLength === 127) {
//             // 64位长度 暂不处理
//             const leftPart = buffer.readUInt32BE(currentOffset)
//             if (leftPart !== 0) {
//                 console.log('太长了，暂不处理')
//                 socket.end()
//                 return
//             }
//             payloadLength = buffer.readUInt32BE(currentOffset + 4)
//             currentOffset += 8
//         }
//         let maskingKey
//         if (isMasked) {
//             maskingKey = buffer.slice(currentOffset, currentOffset + 4)
//             currentOffset += 4
//         }
//         const payloadData = buffer.slice(currentOffset, currentOffset + payloadLength)
//         let unmaskedPayload = Buffer.alloc(payloadLength)
//         if (isMasked) {
//             for (let i = 0; i < payloadLength; i++) {
//                 unmaskedPayload[i] = payloadData[i] ^ maskingKey[i % 4]
//             }
//         } else {
//             unmaskedPayload = payloadData
//         }
//         console.log('unmaskedPayload', unmaskedPayload.toString())
//         // 回复一个消息
//         const reply = 'Hello from server'
//         const replyBuffer = Buffer.alloc(reply.length + 2)
//         replyBuffer[0] = 0x81 // FIN + text frame
//         replyBuffer[1] = reply.length // 不考虑大于126的情况
//         replyBuffer.write(reply, 2)
//         socket.write(replyBuffer)
//     })
// })
server.on('upgrade', (req, socket, head) => {
    // set-websocket-key: dGhlIHNhbXBsZSBub25jZQ== 生成sec-websocket-accept
    const key = req.headers['sec-websocket-key']
    const acceptKey = generateWebSocketAccept(key)
    /**
     * 切换协议
     * 
     * 如果请求头中的 Upgrade 字段不是 websocket，则拒绝连接
     * 如果是 websocket，则计算 Sec-WebSocket-Accept，并发送 101 Switching Protocols 响应，完成协议升级
     */
    const responseHeaders = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        `Sec-WebSocket-Accept: ${acceptKey}`
    ]
    socket.write(responseHeaders.join('\r\n') + '\r\n\r\n')
    // console.log('upgrade', req, socket, head)
    // 处理数据帧
    socket.on('data', (buffer) => {
        console.log('buffer', buffer)
        socket.write(generateWebSocketFrame('Hello from server')) 
    })
})
// 3.处理数据帧


server.listen(3000, () => {
    console.log('Server running at localhost:3000/')
})


/**
 * 根据客户端websocket key生成 sec-websocket-accept
 * 1.将客户端发送的 Sec-WebSocket-Key 和一个固定的 GUID 字符串拼接在一起
 * 2.对拼接后的字符串进行 SHA-1 哈希计算
 * 3.将哈希结果进行 Base64 编码
 * 4.将编码后的字符串作为 Sec-WebSocket-Accept 的值返回给客户端
 * 5.客户端收到服务器的响应后，会验证 Sec-WebSocket-Accept 是否正确，以确认握手成功
 * GUID: 258EAFA5-E914-47DA-95CA-C5AB0DC85B11
 * SHA-1
 * Base64
 */
function generateWebSocketAccept(key) {
    const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
    /**
     * crypto: Node.js 的内置加密模块，提供了各种加密和哈希算法的实现
     * createHash(algorithm): 创建一个哈希对象，algorithm 参数指定使用的哈希算法，这里使用 'sha1'
     * update(data, [inputEncoding]): 向哈希对象添加数据进行哈希计算，data 是要添加的数据，inputEncoding 可选，指定数据的编码格式，这里使用 'binary'
     * digest([encoding]): 计算并返回哈希值，encoding 可选，指定返回值的编码格式，这里使用 'base64' 将结果编码为 Base64 字符串
     */
    return crypto.createHash('sha1')
        .update(key + GUID, 'binary')
        .digest('base64')
} 

/**
 * 
 */
function generateWebSocketFrame(data) {
    //  字符串操作
    const payload = Buffer.from(data)
    // 创建一个新的缓冲区来存储 WebSocket 帧
    const frame = Buffer.alloc(payload.length + 2)
    // 标志位
    frame[0] = 0x81 // FIN + text frame
    frame[1] = payload.length // 不考虑大于126的情况 // 负载长度
    payload.copy(frame, 2)
    return frame
}