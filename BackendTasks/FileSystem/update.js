const fs = require('fs');
fs.appendFile('message.txt', '\n This is  updated line text.', (err) => {
    if (err) {
        console.error('updated file error :', err);
        return;
    }
    console.log('Text file updated successfully!');
});
