let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*📍 GRUPO OFICIAL*

   *
  ┃🧸❏ ${gp1}

   *_ ͟͞〾⃝̵͡𝑬⃗ꭙȾ⃯𝑟𝘦𝑚⃖𝚎֟֯፝͜❀̵⃕ ̤🄷𝕖ᷨɳͦᵵͭ𝐚͢𝖏♡̵̭̭̎͟͞ ₂₀፝֟֯࣪࣪࣪₁₂_*
┃🧸❏ https://chat.whatsapp.com/J9gyFJLbhVIJXaUZlpo8Xt
   
   *_Grupo de antojar 3.0_*
┃🧸❏ https://chat.whatsapp.com/LJKcR8QBJgu37bVFWuhRVn

   *_Canal Oficial_*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029VacDy0R6hENqnTKnG820
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `𝐓𝐄𝐀𝐌 𝐁𝐋𝐀𝐂𝐊` + wm, media, [
['Menu Lista 💖', '/lista']], null, [
['𝐆𝐎𝐊𝐔-𝐁𝐋𝐀𝐂𝐊-𝐁𝐎𝐓-𝐌𝐃-𝐋𝐈𝐓𝐄', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler