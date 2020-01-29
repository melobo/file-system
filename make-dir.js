const fs = require('fs')

function makeDir(path = '') {
    fs.mkdir(path, err => {
        if (err) throw err
        console.log('Directory created in ' + path)
    })
}

makeDir('dir')