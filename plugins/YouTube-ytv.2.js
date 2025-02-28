//Creditos A: https://github.com/Rayo-ofc/Rayo-ofc

import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import _0x555d8d from 'node-fetch';
import _0x1cf825 from 'yt-search';
import _0x226105 from 'ytdl-core';
let handler = async (_0x244539, {
  text: _0x2869ef,
  conn: _0x344213,
  args: _0x542cf5,
  usedPrefix: _0x3c1620,
  command: _0x5a9656
}) => {
  let _0x1a7210 = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': "status@broadcast",
      'fromMe': false,
      'id': 'Halo'
    },
    'message': {
      'contactMessage': {
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=" + _0x244539.sender.split('@')[0x0] + ':' + _0x244539.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    'participant': "0@s.whatsapp.net"
  };
  if (!_0x542cf5[0x0]) {
    return _0x344213.reply(_0x244539.chat, "[❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴", _0x1a7210, _0x244539);
  }
  _0x344213.reply(_0x244539.chat, "⌛ᴄᴀʀɢᴀɴᴅᴏ...\n▰▰▰▰▰▰▰▰▱", _0x1a7210, _0x244539);
  let _0x57c797 = '';
  if (_0x542cf5[0x0].includes("you")) {
    _0x57c797 = _0x542cf5[0x0];
  } else {
    const _0xd884fc = parseInt(_0x542cf5[0x0]) - 0x1;
    if (_0xd884fc >= 0x0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0x0) {
        const _0x351ea5 = global.videoList.find(_0x237949 => _0x237949.from === _0x244539.sender);
        if (_0x351ea5) {
          if (_0xd884fc < _0x351ea5.urls.length) {
            _0x57c797 = _0x351ea5.urls[_0xd884fc];
          } else {}
        } else {}
      } else {}
    }
  }
  try {
    const _0x28459d = await _0x555d8d("https://api.siputzx.my.id/api/d/ytmp4?url=${url}" + encodeURIComponent(_0x542cf5));
    let {
      data: _0x2e1440
    } = await _0x28459d.json();
    await _0x344213.sendMessage(_0x244539.chat, {
      'document': {
        'url': _0x2e1440.dl
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x244539
    });
  } catch {
    try {
      const _0x2c1273 = "
https://api.siputzx.my.id/api/d/ytmp4?url=${url}" + encodeURIComponent(_0x542cf5);
      const _0x3c76bd = await _0x555d8d(_0x2c1273);
      const _0x3a7491 = await _0x3c76bd.json();
      if (!_0x3a7491 || !_0x3a7491.downloads?.["url"]) {
        throw new Error();
      }
      await _0x344213.sendMessage(_0x244539.chat, {
        'document': {
          'url': _0x3a7491.downloads.url
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x244539
      });
    } catch {
      try {
        let _0x15b4ee = await _0x1cf825(_0x57c797);
        let _0x479f5a = _0x15b4ee.all.map(_0x536846 => _0x536846).filter(_0x241453 => _0x241453.type == 'video');
        let _0x2a4f22 = await _0x226105.getInfo('https://youtu.be/' + _0x479f5a[0x0].videoId);
        let _0xadb2 = await _0x226105.chooseFormat(_0x2a4f22.formats, {
          'filter': "audioonly"
        });
        await _0x344213.sendMessage(_0x244539.chat, {
          'audio': {
            'url': _0xadb2.url
          },
          'mimetype': 'video/mp4'
        }, {
          'quoted': _0x244539
        });
      } catch {
        try {
          const _0x31d4ec = "https://api.siputzx.my.id/api/d/ytmp4?url=${url}" + encodeURIComponent(videoUrl);
          const _0x4ca6d7 = await _0x555d8d(_0x31d4ec);
          const _0x2ac531 = await _0x4ca6d7.json();
          if (_0x2ac531.status === 'tunnel' && _0x2ac531.url) {
            const _0x271ba5 = _0x2ac531.url;
            await _0x344213.sendMessage(_0x244539.chat, {
              'document': {
                'url': _0x271ba5
              },
              'mimetype': "video/mp4"
            }, {
              'quoted': _0x244539
            });
          }
        } catch {
          try {
            const _0x49ad85 = await _0x555d8d("https://api.siputzx.my.id/api/d/ytmp4?url=${url}" + encodeURIComponent(_0x542cf5));
            let {
              result: _0x14a508
            } = await _0x49ad85.json();
            await _0x344213.sendMessage(_0x244539.chat, {
              'document': {
                'url': await _0x14a508.download.url
              },
              'mimetype': "video/mp4"
            }, {
              'quoted': _0x244539
            });
          } catch {
            try {
              let _0x16c6e2 = _0x57c797;
              const _0x12165f = await youtubedl(_0x16c6e2)["catch"](async _0x343e2d => await youtubedlv2(_0x16c6e2));
              const _0x5a9bfe = await _0x12165f.audio["128kbps"].download();
              const _0x5f5dab = await _0x12165f.title;
              await _0x344213.sendFile(_0x244539.chat, _0x5a9bfe, _0x5f5dab + ".mp4", null, _0x244539, false, {
                'mimetype': "audio/mp4"
              });
            } catch {
              try {
                let _0x40b997 = await _0x555d8d(apis + "/download/ytmp4?&url=" + _0x57c797);
                let _0x556736 = await _0x40b997.json();
                let _0x1323be = _0x556736.result.title || "error";
                await _0x344213.sendMessage(_0x244539.chat, {
                  'document': {
                    'url': n2
                  },
                  'fileName': _0x1323be + ".mp4",
                  'mimetype': "video/mp4",
                  'caption': "▢ 𝚃𝙸𝚃𝚄𝙻𝙾: " + _0x1323be + "\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: " + n3,
                  'thumbnail': await _0x555d8d(n4)
                }, {
                  'quoted': _0x244539
                });
              } catch (_0x168169) {
                await _0x344213.reply(_0x244539.chat, "lo siento ha corrido un error seguramente posiblemente sea a causa de la api de Rayo-ofc,\n o posiblemente apis externas", _0x1a7210, _0x244539);
                console.log(_0x168169);
              }
            }
          }
        }
      }
    }
  }
};
handler.command = /^ytv.3$/i
export default handler;