//Codigo creado por Ivan 
import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://files.catbox.moe/8piv8y.mp4`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*EMPIEZA LA NUEVA MISION VAMOS ALBIRROJA QUERIDA 🇵🇾*`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
m.react('🇵🇾')
handler.help = ['albirroja']
handler.tags = ['albirroja']
handler.command = ['albirroja', '🇵🇾']
export default handler