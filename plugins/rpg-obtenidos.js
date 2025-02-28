/*
• @David-Chian
- https://github.com/David-Chian
*/

import _0x1473e5 from 'fs';
import _0x30c6a2 from 'node-fetch';
const isHutaoBotMD = () => {
  try {
    const _0x299229 = JSON.parse(_0x1473e5.readFileSync('./package.json', 'utf-8'));
    if (_0x299229.name !== "Goku-Black-Bot-MD") {
      return false;
    }
    if (_0x299229.repository.url !== "git+https://github.com/Eliasivan/Goku-Black-Bot-MD.git") {
      return false;
    }
    return true;
  } catch (_0x532f75) {
    return false;
  }
};
const obtenerPersonajes = async () => {
  try {
    const _0x542bfb = await _0x30c6a2("https://raw.githubusercontent.com/Eliasivan/Goku-Black-Bot-MD/main/lib/characters.json");
    return await _0x542bfb.json();
  } catch (_0x2d6eee) {
    console.error("Error al leer characters.json:", _0x2d6eee);
    return [];
  }
};
const mostrarInventario = async (_0x35f27d, _0x521557, _0x2d66de, _0x88e47e, _0x3d8ac6) => {
  const _0x507859 = _0x521557.sender;
  const {
    characters: _0x40d852,
    totalRwcoins: _0x31f70c
  } = _0x2d66de.usuarios[_0x507859] || {
    'characters': [],
    'totalRwcoins': 0x0
  };
  const _0x4319eb = _0x40d852.length;
  const _0x21a453 = Math.ceil(_0x4319eb / 0xa);
  _0x3d8ac6 = Math.max(0x1, Math.min(_0x3d8ac6, _0x21a453));
  const _0x9d1603 = (_0x3d8ac6 - 0x1) * 0xa;
  const _0x3876e4 = _0x9d1603 + 0xa;
  const _0x341884 = _0x40d852.slice(_0x9d1603, _0x3876e4);
  let _0x3e2f70 = new Set();
  Object.values(_0x2d66de.usuarios).forEach(_0x1df7f4 => {
    _0x1df7f4.characters.forEach(_0x3bbcf1 => _0x3e2f70.add(_0x3bbcf1.name));
  });
  const _0x3653af = "☄ Personajes reclamados ☄x0a☄ Personajes: *" + _0x4319eb + ":*\n\n" + _0x341884.map((_0x47abe1, _0x7f03d2) => "» " + (_0x9d1603 + _0x7f03d2 + 0x1) + ". " + _0x47abe1.name).join("\n") + "\n\n> ◈ _Pagina *" + _0x3d8ac6 + "* de *" + _0x21a453 + '*_';
  await _0x35f27d.reply(_0x521557.chat, _0x3653af, _0x521557);
};
let handler = async (_0x5a6f09, {
  conn: _0x3be8bb,
  usedPrefix: _0x5a0023,
  command: _0x474d0f
}) => {
  if (!isHutaoBotMD()) {
    await _0x5a6f09.reply("☄ Comando no disponible por el momento.");
    return;
  }
  const _0x4788d1 = _0x5a6f09.sender;
  const _0x144147 = _0x5a6f09.chat;
  let _0x31973e = _0x1473e5.existsSync('data.json') ? JSON.parse(_0x1473e5.readFileSync("data.json", "utf-8")) : {
    'chats': {}
  };
  if (!_0x31973e.chats[_0x144147]) {
    _0x31973e.chats[_0x144147] = {
      'usuarios': {},
      'personajesReservados': []
    };
  }
  const _0x29fdf4 = _0x31973e.chats[_0x144147];
  if (!_0x29fdf4.usuarios[_0x4788d1] || _0x29fdf4.usuarios[_0x4788d1].characters.length === 0x0) {
    _0x3be8bb.reply(_0x5a6f09.chat, "☄ No tienes personajes reclamados.", _0x5a6f09);
    return;
  }
  let _0xeb242c = (await obtenerPersonajes()).length;
  const _0x14e5d8 = _0x29fdf4.usuarios[_0x4788d1].characters.length;
  const _0xd42ddb = Math.ceil(_0x14e5d8 / 0xa);
  _0x3be8bb.session = _0x3be8bb.session || {};
  _0x3be8bb.session[_0x144147] = _0x3be8bb.session[_0x144147] || {};
  _0x3be8bb.session[_0x144147].currentPage = _0x3be8bb.session[_0x144147].currentPage || 0x1;
  let _0x37ba6f = _0x3be8bb.session[_0x144147].currentPage;
  if (_0x474d0f === 'nex' || _0x474d0f === "next" || _0x474d0f === "siguiente") {
    _0x37ba6f = Math.min(_0x37ba6f + 0x1, _0xd42ddb);
  } else if (_0x474d0f === 'return' || _0x474d0f === "atras" || _0x474d0f === 'atrás') {
    _0x37ba6f = Math.max(_0x37ba6f - 0x1, 0x1);
  }
  _0x3be8bb.session[_0x144147].currentPage = _0x37ba6f;
  await mostrarInventario(_0x3be8bb, _0x5a6f09, _0x29fdf4, _0xeb242c, _0x37ba6f);
};
handler.help = ["obtenidos"];
handler.tags = ["gacha"];
handler.command = ["obtenidos", "ginfo", "nex", "next", 'siguiente', "atrás", "atras", "return", 'ob'];
handler.register = true;
export default handler