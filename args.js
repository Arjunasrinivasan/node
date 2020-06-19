const argv = require('yargs').argv
var fs = require('fs');
var path = './' + argv.file + '.txt'

let filenames = [];
filenames = filenames.concat(filenames)



if (fs.existsSync(path)) {

    return console.log(argv.file + ":is already exists")
} else {

}
fs.writeFileSync(argv.file + ".txt", "You are awesome");
fs.appendFile('count.txt', '\n' + argv.file, (err, data) => {

    if (err) {
        console.log(err)
    }


})


filenames.push(argv.file)
console.log(filenames)