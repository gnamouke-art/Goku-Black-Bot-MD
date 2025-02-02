import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `ingresa un texto para hablar con Jota`, m)
  
try {
let api = `https://api.siputzx.my.id/api/m/brat?text=${text}`
let json = await axios.get(api, { responseType: 'arraybuffer'})
let img = Buffer.from(json.data, 'binary')
await conn.sendMessage(m.chat, { sticker: img }, { quoted: m })

} catch (error) {
console.error(error)    
}}

handler.command = ['Jot']

export default handler