module.exports = async function handleMenu(msg, sock) {
  const menu = `
  『 𝐌𝐄𝐍𝐔 』
╭════════════════════╮
| 🤑 !calcular
| 🤑 !simi 
| 🤑 !uptime
| 🤑 !ping
| 🤑 !dono
| 🤑 !criador
| 🤑 !info
| 🤑 !gpt (IA)
| 🤑 !fechar (admin)
| 🤑 !abrir (admin)
| 🤑 !menu
| 🤑 !imagem
| 🤑 !ddd
| 🤑 !sorteio
| 🤑 !piada
| 🤑 !convite
| 🤑 !pix
| 🤑 !checkurl
| 🤑 !encurtaurl
| 🤑 !noticias
| 🤑 !todos
| 🤑 !traduzir
| 🤑 !dado
| 🤑 !moeda
| 🤑 !adivinha
| 🤑 !pesquisar
| 🤑 !audio
| ⚠️ Para fazer figurinhas
| ⚠️ Basta enviar uma foto!
╰════════════════════╯`;

  await sendMessageWithReaction(msg, sock, menu, "📜");
};

async function sendMessageWithReaction(msg, sock, text, emoji) {
  await sock.sendMessage(msg.key.remoteJid, { text: `${text}\n\n` });
  await sock.sendMessage(msg.key.remoteJid, {
    react: { text: emoji, key: msg.key },
  });
}
