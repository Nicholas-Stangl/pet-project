const mongoose = require("mongoose")


const ThingSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [3, "Name name must be at least 3 chars"],
    },

    type:{
        type: String,
        required:[true, "Type is required!"],
        minLength: [3, "Type name must be at least 3 chars"],
    },

    desc:{
        type: String,
        required:[true, "Description is required!"],
        minLength: [3, "Description must be at least 3 chars"],
    },

    skillA:{
        type: String,
    },

    skillB:{
        type: String,
    },

    skillC:{
        type: String,
    }

}, {timestamps:true})


const Thing = mongoose.model("Thing", ThingSchema );

module.exports = Thing;