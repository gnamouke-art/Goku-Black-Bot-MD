//Codígo creado por David Chian wa.me/5351524614
import _0x1cf45a from 'fs';
import { generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import _0x1db1ed from 'dotenv';
_0x1db1ed.config();
const SECRET_KEY = process.env.SECRET_KEY;
const contarTotalPersonajes = () => {
  if (_0x1cf45a.existsSync("./src/JSON/characters.json")) {
    const _0x52690d = _0x1cf45a.readFileSync("./src/JSON/characters.json", 'utf-8').split("\n");
    return _0x52690d.length - 0x2;
  } else {
    return 0x0;
  }
};
let handler = async (_0x3c3b79, {
  conn: _0x264f66,
  usedPrefix: _0x29affa
}) => {
  const _0x4c095e = _0x3c3b79.sender;
  let _0x22f1f7 = _0x1cf45a.existsSync("data.json") ? JSON.parse(_0x1cf45a.readFileSync('data.json', "utf-8")) : {
    'usuarios': {},
    'personajesReservados': []
  };
  let _0x22c111 = _0x1cf45a.existsSync("./src/JSON/characters.json") ? JSON.parse(_0x1cf45a.readFileSync('./src/JSON/characters.json', "utf-8")) : [];
  let _0x5cbf6d = contarTotalPersonajes();
  if (!_0x22f1f7.usuarios || !(_0x4c095e in _0x22f1f7.usuarios) || _0x22f1f7.usuarios[_0x4c095e].characters.length === 0x0) {
    _0x264f66.reply(_0x3c3b79.chat, "*No tienes ningún objeto en tu inventario 😹🫵!*", _0x3c3b79);
    return;
  }
  const _0x1fc603 = () => {
    try {
      const _0x107296 = JSON.parse(_0x1cf45a.readFileSync('./package.json', "utf-8"));
      if (_0x107296.name !== "Goku-Black-Bot-MD") {
        return false;
      }
      if (_0x107296.repository.url !== "git+https://github.com/Eliasivan/Goku-Black-Bot-MD.git") {
        return false;
      }
      if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
        return false;
      }
      return true;
    } catch (_0x4df9b4) {
      console.error("Error al leer package.json:", _0x4df9b4);
      return false;
    }
  };
  if (!_0x1fc603()) {
    await _0x264f66.reply(_0x3c3b79.chat, "Este comando solo está disponible para GokuBlack Bot.\n☄https://github.com/Eliasivan/Goku-Black-Bot-MD", _0x3c3b79, rcanal);
    return;
  }
  const {
    characters: _0x12e34d,
    totalRwcoins: _0x559be8
  } = _0x22f1f7.usuarios[_0x4c095e];
  const _0x4b1f32 = _0x12e34d.length;
  let _0x2ad3cd = new Set();
  Object.values(_0x22f1f7.usuarios).forEach(_0xaf7a6e => {
    _0xaf7a6e.characters.forEach(_0x12e9c5 => _0x2ad3cd.add(_0x12e9c5));
  });
  let _0x28c623 = _0x22c111.filter(_0x2ba530 => !_0x2ad3cd.has(_0x2ba530.name));
  let _0x544e0b = _0x28c623.length;
  const _0x2f82ce = "╭──────┄ ♡ ┄──────\n│╽𝑻.𝑼 𝑰.𝑵.𝑽.𝑬.𝑵.𝑻.𝑨.𝑹.𝑰.𝑶╽\n┊𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙟𝙚𝙨:\n⎆ " + _0x4b1f32 + " 𝑊𝐹 ♡\n┊𝙏𝙤𝙩𝙖𝙡 𝙙𝙚 𝙒𝙁𝙘𝙤𝙞𝙣𝙨:\n│ " + _0x559be8 + "\n┊𝙋𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚:\n⎆ " + (_0x4b1f32 / _0x5cbf6d * 0x64).toFixed(0x2) + "%\n┊𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙟𝙚𝙨 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨:\n⎆ " + _0x544e0b + " de " + _0x5cbf6d + " en total.\n╰──────┄ ♢ ┄──────";
  let _0x1eabbb = _0x12e34d.map((_0x36299f, _0x306f1c) => ({
    'header': _0x36299f,
    'title': "Personaje " + (_0x306f1c + 0x1),
    'description': "Selecciona para ver la imagen de " + _0x36299f,
    'id': _0x29affa + "character " + _0x36299f
  }));
  const _0x1671b4 = await getDevice(_0x3c3b79.key.id);
  if (_0x1671b4 !== "desktop" && _0x1671b4 !== "web") {
    const _0x340eb2 = {
      'body': {
        'text': _0x2f82ce
      },
      'footer': {
        'text': "Personajes Obtenidos"
      },
      'nativeFlowMessage': {
        'buttons': [{
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Tus Personajes",
            'sections': [{
              'title': "Lista de Personajes",
              'rows': _0x1eabbb
            }]
          })
        }],
        'messageParamsJson': ''
      }
    };
    let _0x25b811 = generateWAMessageFromContent(_0x3c3b79.chat, {
      'viewOnceMessage': {
        'message': {
          'interactiveMessage': _0x340eb2
        }
      }
    }, {
      'userJid': _0x264f66.user.jid,
      'quoted': _0x3c3b79
    });
    _0x264f66.relayMessage(_0x3c3b79.chat, _0x25b811.message, {
      'messageId': _0x25b811.key.id
    });
  } else {
    _0x264f66.reply(_0x3c3b79.chat, _0x2f82ce, _0x3c3b79);
  }
};
handler.help = ['obtenidos'];
handler.tags = ["fun"];
handler.command = ['obtenidos', "obtenido", 'ob'];
handler.group = true;
export default handler;