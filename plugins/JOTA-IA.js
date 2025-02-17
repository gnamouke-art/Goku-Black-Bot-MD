//Codigo creado por Ivan 
import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch('https://files.catbox.moe/mlvo06.mp4')).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `le explotaste el culo a diomar que gay que eres we`
await conn.sendFile(m.chat, m, img, "Thumbnail.jpg", null, rcanal)
}
handler.help = ['explotarculodiomar']
handler.tags = ['explotarculodiomar']
handler.command = /^(follardiomar)$/i
export default handler