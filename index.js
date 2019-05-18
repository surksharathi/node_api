


/*const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(4000); */

const fs = require('fs');

const fileName = "target.txt";

const data = fs.readFileSync(fileName);
console.log(data.toString());


//fs.watch(fileName, () => console.log("file changed!"));
/*fs.readFile(fileName, (err, data) => {

    if (err) {
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
});*/

console.log("data is running Asyn !!");