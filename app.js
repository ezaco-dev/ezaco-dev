const { createClient } = require('bedrock-protocol');

const client = createClient({
    host: "IP_SERVER",
    port: 19132,
    version: "1.21.124",
    username: "BotTesting",
    offline: false
});

client.on('join', () => {
    console.log("Bot berhasil join ke server!");
});

client.on('text', (packet) => {
    console.log(`[CHAT] ${packet.name}: ${packet.message}`);
});

client.on('disconnect', (packet) => {
    console.log("Bot disconnect:", packet.message);
});
