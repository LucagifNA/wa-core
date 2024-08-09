// config.js
require('dotenv').config();

let premiumNumbers = process.env.PREMIUM_NUMBERS ? process.env.PREMIUM_NUMBERS.split(',') : [];

module.exports = {
    ownerNumber: process.env.OWNER_NUMBER,
    botName: process.env.BOT_NAME || 'ZenihBot',
    aiEndpoint: process.env.AI_ENDPOINT || 'https://lumin-ai.xyz',
    greetingMessage: 'Halo! Saya adalah ZenihBot. Ada yang bisa saya bantu?',
    farewellMessage: 'Terima kasih sudah berbicara dengan saya. Sampai jumpa!',
    getPremiumNumbers: () => premiumNumbers,
    addPremiumNumber: (number) => {
        if (!premiumNumbers.includes(number)) {
            premiumNumbers.push(number);
        }
    },
    removePremiumNumber: (number) => {
        premiumNumbers = premiumNumbers.filter(n => n !== number);
    },
};
