'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const Joi = require('joi');
const User = require('./models/user.model');
const userRoutes = require('./routes/user.routes');

const server = Hapi.server({
    port: 4000,
    host: 'localhost'
});

mongoose.connect(

    "mongodb://amf:" +
    'andrew + ...' + "@cluster0-shard-00-00-yvrbs.mongodb.net:27017,cluster0-shard-00-01-yvrbs.mongodb.net:27017,cluster0-shard-00-02-yvrbs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
);



mongoose.connection.on('connected', () => {
    console.log(`app is connected to database`);
});

mongoose.connection.on('error', function (err) {
    console.log('connection error:' +  err.message);
});

server.route(userRoutes);

const init = async () => {

    await server.register(require('inert'));

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return h.file('./public/hello.html');
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();