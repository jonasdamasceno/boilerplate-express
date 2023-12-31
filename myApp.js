let express = require('express');
let app = express();

const x = (req, res)  => {
    res.send("Hello Express")
};
app.get('/', x)

module.exports = app;




































 module.exports = app;
