var fs = require('fs');
fs.readFile('sample.txt', function(err, data) {
    if (err != null) {
        console.log("error while reading")
    } else {
        console.log("Reading data");
        console.log(data.toString());
    }
})