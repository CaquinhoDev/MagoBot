module.exports = async function handleCriador(msg, sock) {
  await sock.sendMessage(msg.key.remoteJid, {
    text: "Eu sou um bot criado por *Pedro Henrique* e *Jhon*. 👨‍💻\n\n",
  });
  await sock.sendMessage(msg.key.remoteJid, {
    react: { text: "👨‍💻", key: msg.key },
  });
};
