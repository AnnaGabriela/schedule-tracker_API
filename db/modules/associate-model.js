const mongoose = require('mongoose');

const associate = new mongoose.Schema({
    name: { type: String, required: true },
    schedule: [
        {
            date: { type: String, required: true },
            entry: { type: String, required: true },
            exit: { type: String, required: true }
        }
    ],
    scheduleHistory: [
        {
            date: { type: String, required: true },
            entry: { type: String, required: true },
            exit: { type: String, required: true }
        }
    ]
});

module.exports = mongoose.model('Associate', associate);