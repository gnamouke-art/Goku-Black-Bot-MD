/*
- GRACIAS POR VER ESTE ARCHIVO 
*/
import axios from 'axios'

let HS = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, `oye pendejo deberías de poner un link de YouTube :D`, m)
  
try {
let api = await axios.get(`https://mahiru-shiina.vercel.app/download/ytmp4?url=${text}`)
let json = api.data

let { title, description, uploaded, duration, views, type, url, thumbnail, author, download } = json.data
let { name, url: authorUrl } = author


let HS = `- *Titulo:* ${title}
- *Autor:* ${name} - ${authorUrl}
- *Descripción:* ${description}
- *Subido:* ${uploaded}
- *Duración:* ${duration}
- *Vistas:* ${views}`

await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: HS }, { quoted: m })
await conn.sendMessage(m.chat, { video: { url: download }, mimetype: 'video/mp4'  }, { quoted: m })
    
} catch (error) {
console.error(error)
}}

HS.command = ['crx']

export default HS