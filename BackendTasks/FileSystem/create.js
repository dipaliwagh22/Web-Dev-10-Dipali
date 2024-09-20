const fs = require('fs');
fs.writeFile('message.txt', 'Hello, this is first backend task!', (err) => {
    if (err) {
        console.error('Error file:', err);
        return;
    }
    console.log('text file created successfully!');
});
