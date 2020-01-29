const fs = require('fs')

function removeDir(path = '') {
    fs.rmdir(path, err => {
        if (err) throw err
        console.log('Removed directory: ' + path)
    })
}

removeDir('second-dir')