const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('I prefer coffee');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
