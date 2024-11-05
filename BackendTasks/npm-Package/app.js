const inquirer = require('inquirer');
const fs = require('fs');
const qr = require('qr-image');
const prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Enter a URL to generate a QR code:',
    },
])
.then((answers) => {
    const url = answers.url;
    const qrCode = qr.image(url, { type: 'png' });
    const qrPath = './qr-code.png';
    qrCode.pipe(fs.createWriteStream(qrPath));
    console.log('QR code image saved as qr-code.png');

    fs.writeFileSync('user-input.txt', `URL: ${url}`);
    console.log('User input saved in user-input.txt');
})
.catch((error) => {
    console.error('Error:', error);
});