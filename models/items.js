const mongoose = require('mongoose');
//Schema (Shema)
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    date: {
        type:Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);