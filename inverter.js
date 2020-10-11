const fsLibrary = require('fs') 

let image = [
    'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B01111111', 'B00000000', 'B00000000', 
    'B11111100', 'B00011111', 'B11100000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B01111111', 'B00000000', 'B01111110', 
    'B11111100', 'B00111111', 'B11000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B01111111', 'B00000000', 'B01111110', 
    'B11111100', 'B11111111', 'B10000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B01111111', 'B00000000', 'B01111110', 
    'B11111100', 'B11111111', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B01111111', 'B00000000', 'B01111110', 
    'B11111101', 'B11111111', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B00000000', 'B01111111', 'B00000000', 'B00000000', 
    'B11111111', 'B11111110', 'B00000001', 'B11111111', 'B00111111', 'B00001111', 'B10000111', 'B11100011', 'B11111100', 'B00000111', 'B11111000', 'B00000111', 'B11111000', 'B01111111', 'B00111111', 'B01111110', 
    'B11111111', 'B11111100', 'B00000111', 'B11111111', 'B10111111', 'B10001111', 'B10001111', 'B11101111', 'B11111111', 'B00011111', 'B11111110', 'B00011111', 'B11111110', 'B01111111', 'B01111111', 'B01111110', 
    'B11111111', 'B11111000', 'B00001111', 'B11111111', 'B11111111', 'B10001111', 'B11001111', 'B11111111', 'B11111111', 'B10111111', 'B11111110', 'B00111111', 'B11111111', 'B01111111', 'B11111110', 'B01111110', 
    'B11111111', 'B11111000', 'B00001111', 'B11111111', 'B11111111', 'B10011111', 'B11001111', 'B11111111', 'B11111111', 'B10111111', 'B00111111', 'B00111111', 'B11111111', 'B01111111', 'B11111100', 'B01111110', 
    'B11111111', 'B11111110', 'B00011111', 'B11001111', 'B11111111', 'B11011111', 'B11111111', 'B11111111', 'B10011111', 'B11111111', 'B00111111', 'B01111111', 'B00111111', 'B01111111', 'B11111100', 'B01111110', 
    'B11111111', 'B11111111', 'B00000000', 'B11111111', 'B11101111', 'B11111111', 'B11111111', 'B10000001', 'B11111111', 'B11111111', 'B11111000', 'B00000011', 'B11111111', 'B01111111', 'B11110000', 'B01111110', 
    'B11111111', 'B11111111', 'B00000111', 'B11111111', 'B11101111', 'B11111111', 'B11111111', 'B10001111', 'B11111111', 'B11011111', 'B11111111', 'B00011111', 'B11111111', 'B01111111', 'B11111000', 'B01111110', 
    'B11111110', 'B11111111', 'B00001111', 'B11111111', 'B11101111', 'B11111111', 'B11111111', 'B10011111', 'B11111111', 'B11001111', 'B11111111', 'B00111111', 'B11111111', 'B01111111', 'B11111000', 'B01111110', 
    'B11111100', 'B01111111', 'B10011111', 'B11100111', 'B11100111', 'B11111111', 'B11111111', 'B00111111', 'B11001111', 'B11000111', 'B11111111', 'B01111111', 'B10011111', 'B01111111', 'B11111100', 'B01111110', 
    'B11111100', 'B00111111', 'B10011111', 'B10001111', 'B11100111', 'B11111111', 'B11111111', 'B00111111', 'B00011111', 'B11111111', 'B00111111', 'B01111110', 'B00111111', 'B01111111', 'B11111110', 'B01111110', 
    'B11111100', 'B00111111', 'B11011111', 'B10011111', 'B11100111', 'B11111101', 'B11111111', 'B00111111', 'B00111111', 'B11111111', 'B00111111', 'B01111110', 'B01111111', 'B01111111', 'B11111110', 'B01111110', 
    'B11111100', 'B00011111', 'B11011111', 'B11111111', 'B11100011', 'B11111101', 'B11111110', 'B00111111', 'B11111111', 'B11111111', 'B11111111', 'B01111111', 'B11111111', 'B01111111', 'B11111111', 'B01111110', 
    'B11111100', 'B00001111', 'B11111111', 'B11111111', 'B11100011', 'B11111101', 'B11111110', 'B00111111', 'B11111111', 'B11011111', 'B11111110', 'B01111111', 'B11111111', 'B01111111', 'B01111111', 'B01111110', 
    'B11111100', 'B00001111', 'B11111111', 'B11111111', 'B11100001', 'B11111100', 'B11111110', 'B00011111', 'B11111111', 'B11001111', 'B11111100', 'B00111111', 'B11111111', 'B01111111', 'B00111111', 'B11111110',
]

const newImage =[]
image.map((str) => {
    let cont = 1
    let newStr="B" 
    for (let a = str.length - 1; a >= 1; a--) {        
        newStr += str[a].toString()
        cont++
    }    
    newImage.push(newStr)
    console.log('new', newImage) 
    fsLibrary.writeFile('file',newImage,(error) => { if (error) throw err; })
})