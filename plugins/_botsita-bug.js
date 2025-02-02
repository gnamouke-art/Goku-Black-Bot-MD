import fetch from 'node-fetch'

let HS = async (m, { conn, command, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, '`ingresa un texto para hablar con Cami-ia`', m)
try {
let api = await fetch(`https://api.davidcyriltech.my.id/ai/chatbot?query=${text}`)
let json = await api.json()
let JT = { contextInfo: { externalAdReply: { title: 'Cami - IA', body: null,  mediaType: 1, previewType: 0, mediaUrl: 'https://Cami-IA.com', sourceUrl: 'https://Cami-IA.com', thumbnailUrl: 'https://qu.ax/OfoAC.jpg', renderLargerThumbnail: false }}}

  await conn.reply(m.chat, json.result, m, JT)

} catch (error) {
console.error(error)
}}

HS.command = ['iacami']

export default HS