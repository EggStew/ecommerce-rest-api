const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

//Then, load http://localhost:3000/ in a browser to see the output.