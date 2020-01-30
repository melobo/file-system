const fs = require('fs')

fs.unlink('second-dir/dir-content.txt', err => {
    if (err) throw err
    console.log('test-copy.txt was deleted')
})