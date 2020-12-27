fs = require('fs');

function delay(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, millis);
    })
}

(async function () {
    const filename = 'super-badass-file.json';
    let data = require(`./${filename}`);

    console.log(JSON.stringify(data, null, 2));

    await delay(10000);

    // data = require(`./${filename}`); does not change even if updated externally
    data = JSON.parse(fs.readFileSync(filename));

    console.log(JSON.stringify(data, null, 2));
}());