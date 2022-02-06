const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        maxlength: 200.
    },
    upload: {
        type: Date,
        default: Date.now(),
    },
    amount: {
        type: Number,
        required: true,
    },
    mainCategory: {
        type: String,
        required: true,
    },
    detailCategory: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);