const express = require('express');
const path = require('path');
const DB_CONFIG = require('./config/database');

// Init app
const app = express();

mongoose.connect(DB_CONFIG.database);
let db = mongoose.connection;

db.once('open', () => {
	console.log('connected to mongoDB');
});

db.on('error', (err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
	let articles = [
		{ id: 1, title: 'Article One', author: 'Vidith Agarwal', body: 'This is article one' },
		{ id: 2, title: 'Article Two', author: 'Vidith Agarwal', body: 'This is article two' },
		{ id: 3, title: 'Article Three', author: 'Vidith Agarwal', body: 'This is article three' },
		{ id: 4, title: 'Article Four', author: 'Vidith Agarwal', body: 'This is article four' }
	];
	res.render('index', { title: 'Articles', articles: articles });
});

app.get('/articles/add', (req, res) => {
	res.render('add_article', { title: 'Add Article' });
});

// Start Server
app.listen(3000, () => {
	console.log('APP RUNNING ON PORT 3000');
});
