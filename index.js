const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express()
const port = 3000

const resourceMap = new Map([
    ['single-loop-script', 'single-loop-script'],
    ['inline-script', 'inline-script'],
    ['mutation-observer', 'mutation-observer'],
]);

app.get('/', (req, res) => {
    const flavor = req.query['flavor'];
    let resource = resourceMap.get(flavor);

    if (!resource && flavor !== undefined) {
        res.sendStatus(404).end();
    }

    if (!flavor) {
        resource = 'single-loop-script';
    }

    res.set('Content-type', 'text/html');
    fs.readFile(path.resolve(`./stream/${resource}.html`), 'utf8', async function(err, data) {
        if (err) throw err;

        // res.
        const n = Math.floor(data.length / 3);
        const parts = [data.substr(0, n), data.substr(n, n), data.substr(2*n)];

        for (let i = 0; i < 2; i++) {
            res.write(parts[i]);
            await (new Promise(resolve => setTimeout(resolve, 1000)));
        }
        res.write(parts[2]);
        res.end();
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})