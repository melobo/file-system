const fs = require('fs')

fs.copyFile('test.txt', 'test-copy.txt', (err) => {
    if (err) throw err
    console.log('test.txt was copied to text-copy.txt')
})