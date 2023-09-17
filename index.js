const express = require('express');
const app = express();

const { PORT } = require('./config');



app.listen(port, () => {
    console.log(`Server listening on PORT ${PORT}`)
});

//Then, load http://localhost:3000/ in a browser to see the output.