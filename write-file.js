const fs = require('fs')

fs.writeFile('second-dir/content5.txt', 'this is a test', err => {
    if (err) throw err
    console.log('The file has been saved!')
})