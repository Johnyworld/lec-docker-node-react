const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

app.use(bodyParser.json());

db.pool.query(`CREATE TABLE list(
	id INTEGER AUTO_INCREMENT,
	value TEXT,
	PRIMARY KEY (id)
)`, (err, results, fields) => {
	console.log('== Results: ', results);
})

app.get('/api/values', function(req, res) {
	db.pool.query('SELECT * FROM List;',
	(err, results, fields) => {
		if (err)
			return res.status(500).send(err)
		else 
			return res.json(results);
	})
})

app.post('/api/value', function(req, res, next) {
	db.pool.query(`INSERT INTO list (value) VALUES("${req.body.value}")`,
	(err, results, fields) => {
		if (err)
			return res.status(500).send(err)
		else 
			return res.json({ success: true, value: req.body.value });
	})
});


const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
