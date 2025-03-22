import db from '../lib/database.js'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import { createHash } from 'crypto'  
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
 let bio = 0, fechaBio
  let sinDefinir = '😔 Es privada'
  let biografia = await conn.fetchStatus(m.sender).catch(() => null)
  if (!biografia || !biografia[0] || biografia[0].status === null) {
   bio = sinDefinir
   fechaBio = "Fecha no disponible"
} else {
bio = biografia[0].status || sinDefinir
fechaBio = biografia[0].setAt ? new Date(biografia[0].setAt).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric", }) : "Fecha no disponible"
}
  let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/0bb7e9e7c8cb4e820f1fe.jpg')
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/0bb7e9e7c8cb4e820f1fe.jpg')
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`✧ Ya estás registrado.\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg*`)
  if (!Reg.test(text)) return m.reply(`✧ Formato incorrecto.\n\nUso del comamdo: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.18*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('✧ El nombre no puede estar vacío.')
  if (!age) return m.reply('✧ La edad no puede estar vacía.')
  if (name.length >= 100) return m.reply('🍭 El nombre es demasiado largo.' )
  age = parseInt(age)
  if (age > 1000) return m.reply('✧ Wow el abuelo quiere jugar al bot.')
  if (age < 5) return m.reply('✧ hay un abuelo bebé jsjsj. ')
  user.name = name + '✓'.trim()
  user.age = age
  user.descripcion = bio 
  user.regTime = + new Date      
  user.registered = true
  global.db.data.users[m.sender].coin += 500
  global.db.data.users[m.sender].exp += 600
  global.db.data.users[m.sender].joincount += 50
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)
  let regbot = `╭══• ೋ•✧๑♡๑✧•ೋ •══╮
*¡𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙾!*
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
║_-~-__-~-__-~-__-~-__-~-__-~-__-~-__-~-__-~-__-~-__
║
║ ֪ ׂ⛓️ ̶ ׁ ֪ 𝐍𝐨𝐦𝐛𝐫𝐞: ${name}
║ ֪ ׁ🌫️  𝇌 𝐄𝐝𝐚𝐝: ${age} *Años*
║
║ *𝙶𝚛𝚊𝚌𝚒𝚜 𝚙𝚘𝚛 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚛𝚝𝚎* 
║📝 *𝚄𝚝𝚒𝚕𝚒𝚣𝚊* *.menu* *𝚙𝚊𝚛𝚊* *𝚟𝚎𝚛* *𝚎𝚕* *𝚖𝚎𝚗ú* *𝚍𝚎* *𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜.*
║
║
║ ✨ 𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
║• 15 Estrellas 🌟
║• 5 BlackCoins 🪙
║• 245 Experiencia 💸
║• 12 Tokens 💰
╚══✦「꧙꧙꧙꧙꧙꧙꧙꧙꧙꧙꧙꧙」`
await m.react('📩')
await conn.sendMessage(m.chat, {
        text: regbot,
        contextInfo: {
            externalAdReply: {
                title: '✅ Usuario Verificado ✅',
                body: textbot,
                thumbnailUrl: pp,
                sourceUrl: channel,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });    
}

let chtxt = `👤 *𝚄𝚜𝚎𝚛* » ${m.pushName || 'Anónimo'}
🗂 *𝚅𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚌𝚒𝚘́𝚗* » ${user.name}
⭐️ *𝙴𝚍𝚊𝚍* » ${user.age} años
👀 *𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗* » ${user.descripcion} 
⏳ *𝚄𝚕𝚝𝚒𝚖𝚊 𝙼𝚘𝚍𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗* » ${fechaBio}
📆 *𝙵𝚎𝚌𝚑𝚊* » ${moment.tz('America/Bogota').format('DD/MM/YY')}
☁️ *𝙽𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚘* »
⤷ ${sn}`;

    await conn.sendMessage(global.idchannel, {
        text: chtxt,
        contextInfo: {
            externalAdReply: {
                title: "【 🔔 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎́𝐍 🔔 】",
                body: '🥳 ¡𝚄𝚗 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚗𝚞𝚎𝚟𝚘 𝚎𝚗 𝚖𝚒 𝚋𝚊𝚜𝚎 𝚍𝚎 𝚍𝚊𝚝𝚘𝚜!',
                thumbnailUrl: perfil,
                sourceUrl: redes,
                mediaType: 1,
                showAdAttribution: false,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: null });
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler