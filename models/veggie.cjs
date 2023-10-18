/*eslint-disable no-undef*/

// create a schema (breakdown of what our data would look like)
const mongoose = require('mongoose')

// Schema
const veggieSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    isHealthy: Boolean,
    readyToEat: Boolean
},
{
    timestamps: true
}


)



// create Model with that schema
// whatever we put as the collection name will be lowercased and pluralized like fruits
// Fruit > fruits
// User > users

const Veggie = mongoose.model("Veggie", veggieSchema)


module.exports = Veggie;