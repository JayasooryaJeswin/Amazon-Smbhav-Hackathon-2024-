const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Route: Get delivery options
router.get("/delivery-options", (req, res) => {
    const options = [
        {
            type: "Express",
            description: "Fast delivery, higher emissions.",
            co2Saved: 0,
        },
        {
            type: "Green",
            description: "Eco-friendly delivery, takes longer.",
            co2Saved: 15, // Example value in %
        },
    ];
    res.json(options);
});

// Route: Add order and calculate rewards
router.post("/order", async (req, res) => {
    const { userId, productName, deliveryOption } = req.body;
    const co2Saved = deliveryOption === "Green" ? 15 : 0;

    const user = await User.findById(userId);
    user.orders.push({ productName, deliveryOption, co2Saved });
    user.rewardPoints += deliveryOption === "Green" ? 10 : 0; // Reward 10 points for Green
    await user.save();

    res.json({ message: "Order placed successfully!", user });
});

// Route: Get user dashboard data
router.get("/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

module.exports = router;
