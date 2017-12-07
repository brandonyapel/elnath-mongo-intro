// a get request for games

var express = require('express');
var router = express.Router();
var Game = require('../models/games.schema');


router.get('/', function (req, res) {
    console.log('/games get')
    Game.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
});


module.exports = router;