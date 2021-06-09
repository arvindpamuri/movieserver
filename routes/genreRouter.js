const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Genres = require('../models/genres'); 

const genreRouter = express.Router();

genreRouter.use(bodyParser.json());

genreRouter.route('/')

.get((req,res,next) => {
    Genres.find({})
    .then((genres) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(genres);
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

module.exports = genreRouter;
