const fs = require('fs');
fs.unlink('message.txt', (err) => {
    if (err) {
        console.error(' delete file error :', err);
        return;
    }
    console.log('File deleted successfully!');
});
