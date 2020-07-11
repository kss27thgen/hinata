const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./config/db");

// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
	res.send("hollo world");
});

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
