//IVAN HA VUELTO REVIVIR A GOKUBLACK-BOT-MD
/*by ivan*/
import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn, text, args }) => {
if (!text)  return conn.reply(m.chat, `> Ingresa la cancion que deseas descargar`, m)


try {
let res = await search(args.join(" "))

let apiAud = await fetch(`https://api.agungny.my.id/api/youtube-audio?url=${'https://youtu.be/' + res[0].videoId}`)
let dataAud = await apiAud.json()
let apiVid = await fetch(`https://api.agungny.my.id/api/youtube-video?url=${'https://youtu.be/' + res[0].videoId}`)
let dataVid = await apiVid.json()


let txt = `*Goku-Black-Bot-MD*
☆ 📑 𝐓𝐢𝐭𝐮𝐥𝐨:${res[0].title}
☆ 🎼 𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧:${res[0].timestamp}
☆ 🗓️ 𝐕𝐢𝐬𝐭𝐚𝐬:${res[0].views}
☆ 📄 𝐋𝐢𝐧𝐤:${res[0].ago}
> Responda la opciónes
1 : Audio
2 : Video`

let SM = await conn.sendFile(m.chat, res[0].thumbnail, 'Menu.jpg', rcanal, txt, m)
conn.ev.on("messages.upsert", async (upsertedMessage) => {
let RM = upsertedMessage.messages[0];
if (!RM.message) return

const UR = RM.message.conversation || RM.message.extendedTextMessage?.text
let UC = RM.key.remoteJid

if (RM.message.extendedTextMessage?.contextInfo?.stanzaId === SM.key.id) {

if (UR === '1') {
  await conn.sendMessage(UC, { audio: { url: dataAud.result.downloadUrl }, mimetype: "audio/mpeg", caption: null }, { quoted: RM })
} else if (UR === '2') {
  await conn.sendMessage(m.chat, { video: { url: dataVid.result.downloadUrl }, caption: ``, mimetype: 'video/mp4', fileName: `${res[0].title}` + `.mp4`}, {quoted: m })
} else {
await conn.sendMessage(UC, { text: "Opcion invalida, responde con 1 *(audio)* o 2 *(video)*." }, { quoted: RM })
}}})

} catch (error) {
console.error(error)
}}

handler.command = ["yoa"]

export default handler

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}