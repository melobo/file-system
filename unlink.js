const fs = require('fs')

fs.unlink('test-copy.txt', (err) => {
    if (err) throw err
    console.log('test-copy.txt was deleted')
})