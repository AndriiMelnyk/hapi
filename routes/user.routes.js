const UserController = require('../controllers/user.controller');
const Joi = require('joi');
const User = require('../models/user.model');


module.exports = [
    {
        path: '/api/users',
        method: 'POST',
        config: {
        handler: UserController.create,
        validate: {
            payload: User,
            failAction: (request, h, err) => {
                throw err;
                return;
            }
        }
        }
    },
    {
        path: '/api/users',
        method: 'GET',
        handler: UserController.find
    },
    {
        path: '/api/user/{id}',
        method: 'GET',
        handler: UserController.findOne
    },
    {
        path: '/api/user/{id}',
        method: 'DELETE',
        handler: UserController.delete
    },
    {
        path: '/api/users/{id}',
        method: 'PUT',
       
        handler: UserController.update,
    }
];

