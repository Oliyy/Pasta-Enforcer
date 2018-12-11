const Discord = require('discord.js');
const client = new Discord.Client();

const pasta = ["Spaghetti", "Macaroni", "Ravioli", "Cannelloni", "Linguine", "Lasagne", "Rigatoni", "Tortellini", "Penne", "Fettuccine", "Pappardelle", "Orzi", "Bucatini", "Fusilli", "Vermicelli", "Orecchiette", "Fregula", "Taglierini", "Farfalle", "Manicotti", "Cavatelli", "Paccheri", "Capellini", "Agnolotti", "Strozzapreti", "Cavatappi", "Ziti", "Trofie", "Garganelli", "Conchiglie", "Casarecce", "Rotini", "Pizzoccheri", "Ditalini", "Ptitim", "Gemelli", "Scialatielli", "Cappelletti", "Capelli d’angelo", "Bigoli", "Calamarata", "Mezzelune", "Bavette", "MeMes"]


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.bot == true) return;
  const randPasta = pasta[Math.floor(Math.random()*pasta.length)];
  // if (pasta.indexOf(msg.member.displayName) == -1) {
    msg.member.setNickname(randPasta)
      .then(console.log("Changing " + msg.author.username + "'s nickname"))
      .catch(console.error);
  // }

});

client.login('token');
