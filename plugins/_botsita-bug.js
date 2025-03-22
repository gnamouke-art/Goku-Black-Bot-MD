import fetch from 'node-fetch'

let HS = async (m, { conn, command, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, '`ingresa un texto para hablar con Cami-ia`', m)
} catch (error) {
console.error(error)
}}

HS.command = ['verreg']

export default HS