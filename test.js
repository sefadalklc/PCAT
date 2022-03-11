const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String
});

const Photo = mongoose.model('Photo', PhotoSchema)

/* //create a photo
Photo.create({
    title: 'Photo Title 1',
    description:'AAAAAAAAAABBBBBBBB',
}); */

/* //read a photo
Photo.find({}, (err,data) => {
    console.log(data);
}) */

const id='622b99ac93d5450eb1d2ecc8';

Photo.findByIdAndUpdate(
    id,{
        title:"Photo Title 1 updated",
        description:'Photo Title 1 updated', 
    },
    {
        new: true
    },
    (err,data) => {
        console.log(data);
    }
);