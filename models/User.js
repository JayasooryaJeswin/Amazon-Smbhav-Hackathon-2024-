const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    rewardPoints: { type: Number, default: 0 },
    orders: [
        {
            productName: String,
            deliveryOption: String, // 'Express' or 'Green'
            co2Saved: Number,
        },
    ],
});

module.exports = mongoose.model("User", userSchema);
