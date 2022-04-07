const fs = require('fs')

fs.writeFile('./files/2.txt', 'Hello Node.js', function(err){
    console.log(err)
})
