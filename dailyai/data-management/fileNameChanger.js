const fs = require('fs');
//change image file names to a random string
const path = require('path');
const directoryPath = path.join("C:\\Users\\sonaovski\\Downloads\\98");
const files = fs.readdirSync(directoryPath);
const randomString = require('random-string');
const randomStringOptions = {length: 20, numeric: true, letters: true, special: false};
const randomStrings = [];

//create random strings
for (let i = 0; i < files.length; i++) {
  randomStrings.push(randomString(randomStringOptions));
}
fs.writeFileSync('randomStrings.json', JSON.stringify(randomStrings));

//change file names
for (let i = 0; i < files.length; i++) {
  fs.renameSync(directoryPath + '/' + files[i], directoryPath + '/' + randomStrings[i] + '.jpg');
}