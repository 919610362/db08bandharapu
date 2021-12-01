const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    shade: {
        type: String,
        minLength: 45
    },
    cost: {
        type: Number,
        minLength: 99
    },
    size: String
})

module.exports = mongoose.model("car", carSchema)