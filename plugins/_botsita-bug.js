import fetch from 'node-fetch'

let HS = async (m, { conn, command, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, '`ingresa un texto para hablar con Cami-ia`', m)
try {
let json = await api.json()
let JT = { contextInfo: { externalAdReply: { title: 'VER - REG', body: null,  mediaType: 1, previewType: 0, mediaUrl: sourceUrl: thumbnailUrl: renderLargerThumbnail: false }}}

  await conn.reply(m.chat, json.result, m, JT)

} catch (error) {
console.error(error)
}}

HS.command = ['verreg']

export default HS