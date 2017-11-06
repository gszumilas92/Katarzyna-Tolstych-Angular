const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentSchema = new Schema ({
    section: String,
    content: Object
})

const Contents = mongoose.model('Contents', contentSchema);

module.exports = Contents;
