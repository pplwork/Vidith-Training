const express = require('express');
const path = require('path');
const DB_CONFIG = require('./config/database');
const mongoose = require('mongoose');
const Article = require('./models/article');

// Init app
const app = express();

mongoose.connect(DB_CONFIG.database);
let db = mongoose.connection;

// Check connection
db.once('open', () => {
	console.log('connected to mongoDB');
});

// Check for db errors
db.on('error', (err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
	Article.find({}, (err, article) => {
		if (err) {
			console.log(err);
		}
		else {
			res.render('index', { title: 'Articles', articles: article });
		}
	});
});

// Add route
app.get('/articles/add', (req, res) => {
	res.render('add_article', { title: 'Add Article' });
});

//Add submit POST route
app.post('/articles/add', (req, res) => {
	let article = new Article();
	article.title = req.body.title;
	article.author = req.body.author;
	article.body = req.body.body;

	article.save((err) => {
		if (err) {
			console.log(err);
			return;
		}
		else {
			// req.flash('success', 'Article Added');
			res.redirect('/');
		}
	});
});

// Start Server
app.listen(3000, () => {
	console.log('APP RUNNING ON PORT 3000');
});
