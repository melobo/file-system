const fs = require('fs')

function readDir(path = '') {
    fs.readdir(path, 'utf8', (err, files) => {
        if (err) throw err
        console.log('Files in directory: ' + files)
    })
}

readDir('second-dir')