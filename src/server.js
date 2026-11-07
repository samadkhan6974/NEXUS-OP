
const express = require("express");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to NEXUS OPS!");
});


// Health Check API
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        application: "NEXUS OPS",
        timestamp: new Date()
    });
});

// Version API
app.get("/api/version", (req, res) => {
    res.status(200).json({
        application: "NEXUS OPS",
        version: "1.0.0",
        environment: "development"
    });
});

app.use("/", healthRoutes);
// Start server
app.listen(PORT, () => {
    console.log(`NEXUS OPS server running on port ${PORT}`);
});
