//user.controller.js
const User = require('../models/user.model');

module.exports = {
    find(req, reply) {
        return User.find({}, (err, users) => {

            if (err) {
                return err;
            }
            return users;
        });
    },
    create(req, reply) {
        if (!req.payload.name) {
            return 'name is required field';
        }


        return User.create({
            name: req.payload.name,
            city: req.payload.city,
            address: req.payload.address,
            age: req.payload.age,
            isDeveloper: req.payload.isDeveloper
        }, (err, savedUser) => {
            if (err) {
                return err;
            }

            return savedUser;
        });
    },
    update(req, reply) {
        if (!req.params.id) {
            return 'id is required param';
        }

        let attributes = {};

        if (req.payload.name) {
            attributes.name = req.payload.name;
        }
        if (req.payload.city) {
            attributes.city = req.payload.city;
        }
        if (req.payload.address) {
            attributes.address = req.payload.address;
        }

        return User.findByIdAndUpdate(
            req.params.id,
            attributes,
            { new: true },
            (err, user) => {
                if (err) {
                    return err;
                }
                return user;
            })
    },
    delete(req, reply) {
        if (!req.params.id) {
            return 'id is required param';
        }

        return User.findByIdAndRemove(req.params.id, (err, result) => {
            if (err) {
                return err;
            }
            return `company has deleted with id ${req.params.id}`;
        })
    },
    findOne(req, reply) {
        if (!req.params.id) {
            return 'id is required param';
        }
        return User.findById(req.params.id, (err, user) => {
            if (err) {
                return err;
            }

            return user;
        });
    }

};
