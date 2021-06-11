const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Movies = require('../models/movies'); 

const movieRouter = express.Router();

movieRouter.use(bodyParser.json());

movieRouter.route('/')
.get((req,res,next) => {
    Movies.find({})
    .then((movies) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(movies);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.put((req,res,next) => {
    res.end('Not supported');
})

.post((req,res,next) => {
    res.end('Not supported');
})

.delete((req,res,next) => {
    res.end('Not supported');
})

movieRouter.route('/updateGenre/:id')
.get((req,res,next) => {
    res.end('Not supported');
})

.put((req,res,next) => {
    console.log(req);
    Movies.findByIdAndUpdate({_id: req.params.id}, {
        Genre: req.body.Genre
    }, {new: true})
    .then((movie) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(movie);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = movieRouter;
