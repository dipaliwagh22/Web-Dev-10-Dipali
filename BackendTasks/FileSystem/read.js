const fs = require('fs');
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('read file error:', err);
        return;
    }
    console.log('File content:', data);
});
