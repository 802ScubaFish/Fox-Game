const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const public = path.resolve('./dist');

app.use(express.static(public));

app.get('*', (req, res) => {
    res.sendFile(public + '/index.html')
})

app.listen(port, () => console.log(`Server running on port ${port}!`))

// This page is just setting up a basic express server - - - - - - - - - - - - -
