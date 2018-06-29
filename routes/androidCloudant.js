var express = require('express');
var router = express.Router();
var request = require('request');


var path = require('path'),
    fs = require('fs');
var bodyParser = require('body-parser');

//DATABASE CONNECTION AND CONFIGURATION


url ="https://orneducearressionestredd:fb38f144abf714f186e0fe55b2a8b8a02512fb1d@85c55b26-45df-413a-852a-5f589409004d-bluemix.cloudant.com";

var dbhandle = require('cloudant')(url, function(err,cloudant){
    if (err) {
        return console.log('Error connecting to Cloudant account %s: %s',  err.message);
    }else{
        console.log('Connected to cloudant using %s');
    }
});

var mydb = dbhandle.use("db_for_ayush");




router.post('/event', function (request, response) {
    ID_EVENT = request.body.ID_EVENT;
    Event = request.body.Event;
    timestamp = request.body.TimeStamp;

    console.log(ID_EVENT);
    console.log(Event);
    console.log(timestamp);
    response.send(
        {
            ID_EVENT :ID_EVENT

        }
    );

    mydb.insert({ "ID_EVENT": ID_EVENT.toString(), "EVENT":Event.toString(), "TIMESTAMP":timestamp.toString() }, "EVENT_"+ID_EVENT.toString() , function(err, body) {
        if (!err)
            console.log(body);
    });




});

router.post('/trip', function (request, response) {
    ID_TRIP = request.body.ID_TRIP;
    Trip = request.body.Trip;
    timestamp = request.body.TimeStamp;


    console.log(ID_TRIP);
    console.log(Trip);
    console.log(timestamp);

    response.send(
        {
            ID_TRIP :ID_TRIP

        }
    );

    mydb.insert({ "ID_TRIPS": ID_TRIP.toString(), "TRIP":Trip.toString(), "TIMESTAMP":timestamp.toString() }, "TRIP_"+ID_TRIP.toString() , function(err, body) {
        if (!err)
            console.log(body);
    });



});


router.post('/eventTimestamp', function (request, response) {

    timestamp = request.body.TimeStamp;



    console.log(timestamp);

    mydb.find({selector:{TIMESTAMP:timestamp.toString()}}, function(er, result) {
        if (er) {
            throw er;
        }



        console.log('Found %d documents ', result.docs.length);
        console.log('  Doc timestamp: %s', result.docs[0].TIMESTAMP);
        resultTime = result.docs[0].TIMESTAMP;

        response.send(
            {
                TIMESTAMP :resultTime

            }
        );
    });


});


router.post('/tripTimestamp', function (request, response) {

    timestamp = request.body.TimeStamp;



    console.log(timestamp);

    mydb.find({selector:{TIMESTAMP:timestamp.toString()}}, function(er, result) {
        if (er) {
            throw er;
        }



        console.log('Found %d documents ', result.docs.length);
        console.log('  Doc timestamp: %s', result.docs[0].TIMESTAMP);
        resultTime = result.docs[0].TIMESTAMP;

        response.send(
            {
                TIMESTAMP :resultTime

            }
        );
    });


});

router.post('/c', function (request, response) {

Event = request.body.Event;
    Date = request.body.Date;



    console.log(Event);
    console.log(Date);


    response.send(Event);






});




module.exports = router;

