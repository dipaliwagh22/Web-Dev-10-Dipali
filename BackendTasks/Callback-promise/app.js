const fs = require('fs');

function readFileWithCallback() {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file with callback:', err);
            return;
        }
        console.log('Data read with callback:', data);
    });
}

function readFileWithPromise() {
    fs.promises.readFile('data.txt', 'utf8')
        .then((data) => {
            console.log('Data read with promise:', data);
        })
        .catch((err) => {
            console.error('Error reading file with promise:', err);
        });
}

async function readFileWithAsyncAwait() {
    try {
        const data = await fs.promises.readFile('data.txt', 'utf8');
        console.log('Data read with async/await:', data);
    } catch (err) {
        console.error('Error reading file with async/await:', err);
    }
}

readFileWithCallback();
readFileWithPromise();
readFileWithAsyncAwait();
