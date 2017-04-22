/*eslint-env node, express*/
"use strict";
var express = require ("express");
var config = require("../config/config");
var server = express();

var Discogs = require("disconnect").Client;

var db = new Discogs(config.discogsCredentials).database();

server.get("/search", function(req, res){
    db.search(req.query.q, {}, function(err, data){
        console.log(err);
        res.send(data);
    });
});

server.listen("8080");