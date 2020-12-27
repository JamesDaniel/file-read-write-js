fs = require('fs');

(function () {
    const filename = 'super-badass-file.json'
    const data = {
        pizza: "margarita",
        code: "classic",
        crisps: "chipsticks",
        potato: "fries"
    }

    fs.writeFileSync(filename, JSON.stringify(data));

    console.log('all done');
}());