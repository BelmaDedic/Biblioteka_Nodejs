const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const Book = require('./models/book');
const blogRoutes = require('./routes/bookRoutes');

const app = express();

const dbURI = 'mongodb+srv://belma:svadba1712@cluster0.kn4cg.mongodb.net/library?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => app.listen(3000))
.catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/books');
})

app.get('/add-new', (req, res) => {
    res.render('create');
})

app.use('/books', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404');
})