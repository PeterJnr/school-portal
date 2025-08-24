// 1. Import the Express framework (for building web servers in Node.js)
const express = require("express");

// 2. Load environment variables from .env file into process.env
//    Why: so you can keep things like PORT, DB credentials, API keys outside the code
require("dotenv").config();

// 3. Create an Express application (your server)
const app = express();

// 4. Middleware: tell Express to automatically parse JSON bodies
//    Why: so when frontend sends JSON (e.g. { "name": "Peter" }),
//    you can access it with req.body.name instead of parsing manually
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to school portal 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
