
const express = require("express");

const router = express.Router();

// Health Check API
router.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: "NEXUS OPS",
        timestamp: new Date()
    });
});

module.exports = router;
