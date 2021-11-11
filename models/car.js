const mongoose = require("mongoose") 
const carSchema = mongoose.Schema({ 
 shade: String, 
 cost: Number, 
 size: String 
}) 
 
module.exports = mongoose.model("car", carSchema) 