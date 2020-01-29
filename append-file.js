const fs = require('fs')

fs.appendFile('test.txt', '\nappend data', err => {
    if (err) throw err
    console.log('Saved')
})