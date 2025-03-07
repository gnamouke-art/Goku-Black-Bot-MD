/** By @MoonContentCreator || https://github.com/MoonContentCreator/BixbyBot-Md **/
import _0x6e4a4f from 'node-fetch';
import 'fs';
const handler = async (_0x4fabbd, {
  conn: _0xee23ae,
  command: _0x567d14,
    let _0x7b97fc = _0x4fabbd.mentionedJid[0x0] ? _0x4fabbd.mentionedJid[0x0] : _0x4fabbd.quoted ? _0x4fabbd.quoted.sender : _0x2a4858;
    let _0x5bf87c = global.db.data.users[_0x7b97fc];
    let _0x3927e4 = {
      'key': {
        'participants': "0@s.whatsapp.net",
        'fromMe': false,
        'id': "Halo"
      },
      'message': {
        'locationMessage': {
          'name': "Usuario mutado",
          'jpegThumbnail': await (await _0x6e4a4f('https://telegra.ph/file/f8324d9798fa2ed2317bc.png')).buffer(),
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD"
        }
      },
      'participant': "0@s.whatsapp.net"
    };
    if (!_0x4fabbd.mentionedJid[0x0] && !_0x4fabbd.quoted) {
      return _0xee23ae.reply(_0x4fabbd.chat, "mutare", _0x4fabbd);
    }
    if (_0x5bf87c.muto === true) {
      throw "Este usuario ya ha sido mutado";
    }
    _0xee23ae.reply(_0x4fabbd.chat, "Tus mensajes serán eliminados", _0x3927e4, null, {
      'mentions': [_0x7b97fc]
    });
    global.db.data.users[_0x7b97fc].muto = true;
  }
  if (_0x567d14 === "unmute") {
    if (!_0x5d2cdb) {
      throw _0x4fabbd.reply("Sólo un administrador puede ejecutar este comando 👑");
    }
    let _0x13766a = _0x4fabbd.mentionedJid[0x0] ? _0x4fabbd.mentionedJid[0x0] : _0x4fabbd.quoted ? _0x4fabbd.quoted.sender : _0x2a4858;
    let _0x176218 = {
      'key': {
        'participants': '0@s.whatsapp.net',
        'fromMe': false,
        'id': "Halo"
      },
      'message': {
        'locationMessage': {
          'name': "Usuario demutado",
          'jpegThumbnail': await (await _0x6e4a4f("https://telegra.ph/file/aea704d0b242b8c41bf15.png")).buffer(),
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD"
        }
      },
      'participant': "0@s.whatsapp.net"
    };
    if (_0x13766a === _0x4fabbd.sender) {
      throw "No puedes desmutarte, pídele a un administrador que te desmute.";
    }
    if (!_0x4fabbd.mentionedJid[0x0] && !_0x4fabbd.quoted) {
      return _0xee23ae.reply(_0x4fabbd.chat, "Menciona a quién deseas demutar.", _0x4fabbd);
    }
    global.db.data.users[_0x13766a].muto = false;
    _0xee23ae.reply(_0x4fabbd.chat, "Tus mensajes ya no serán eliminados", _0x176218, null, {
      'mentions': [_0x13766a]
    });
  }
};
handler.command = ['find']
export default handler;