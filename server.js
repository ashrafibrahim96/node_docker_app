const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '127.0.0.1';

app.get('/', (req,res) => {
	res.send('Hello Everyone ! ');
});

app.listen(PORT, () => {
console.log(`Running on port ${PORT}`);
});



