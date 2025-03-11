import fetch from 'node-fetch';
import yts from 'yt-search';
import axios from 'axios';

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
const rcanal = process.env.RCANNEL;
const ddownr = {
  download: async (url, format) => {
    if (!formatAudio.includes(format)) {
      throw new Error(`Formato '${format}' no soportado. Solo se admiten los siguientes: ${formatAudio.join(', ')}`);
    }

    const configuracionDeLaSolicitud = {
      method: 'GET',
      url: `https://api.neoxr.eu/api/youtube?url=${url}&type=audio&quality=128kbps&apikey=GataDios`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    try {
      const response = await axios.request(configuracionDeLaSolicitud);
      if (response.data && response.data.success) {
        const { id } = response.data;
        const downloadUrl = await ddownr.cekProgress(id);
        return downloadUrl;
      } else {
        throw new Error('Fallo al obtener los detalles del video.');
      }
    } catch (error) {
      console.error('Error en descarga:', error);
      throw error;
    }
  },
  cekProgress: async (id) => {
    const configuracionDeLaSolicitud = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    try {
      while (true) {
        const response = await axios.request(configuracionDeLaSolicitud);
        if (response.data && response.data.success && response.data.progress === 1000) {
          return response.data.download_url;
        }
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console.error('Error en el progreso:', error);
      throw error;
    }
  }
};

const formatViews = (views) => {
  if (typeof views === 'number' && !isNaN(views)) {
    return views.toLocaleString();
  } else {
    return 'N/A';
  }
};

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    m.react('🍁');
    return conn.reply(m.chat, '[✰] Ingresa el nombre de la música a descargar.\n\n» Ejemplo:\n' + `> ${usedPrefix + command} Neverita Bad Bunny`, m, rcanal);
  }

  const search = await yts(args.join(' '));
  if (!search || !search.all || search.all.length === 0) {
    return m.reply('✖️ No se encontraron resultados para tu búsqueda.');
  }

  const videoInfo = search.all[0];
  const { title, thumbnail, timestamp, views, ago, url } = videoInfo;
  const author = videoInfo.author;
  const formatoVistas = formatViews(views);

  let infoMessage = '「✦」Descargando *<${title}>*\n\n> ✦ Canal » *${videoInfo.author.name || 'Desconocido'}*\n> ✰ Vistas » *${views}*\n> ⴵ Duración » *${timestamp}*\n> ✐ Publicación » *${ago}*\n> 🜸 Link » ${url}\n';

  const thumb = (await conn.getFile(thumbnail))?.data;

  await conn.sendFile(m.chat, thumb, 'thumbnail.jpg', infoMessage, m, rcanal);

  try {
    const downloadUrl = await ddownr.download(url, 'mp3');
    await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
    m.react('✅');
  } catch (error) {
    console.error('Error en descarga:', error);
    m.react('✖️');
    return m.reply(`⚠️ *Error:* ${error.message}`);
  }
};

handler.help = ['play *<nombre de la canción>*'];
handler.tags = ['downloader'];
handler.command = ['play'];

export default handler;