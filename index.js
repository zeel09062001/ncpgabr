const express = require("express");
const app = express();
const PORT = process.ndoe_env || 80;

app.get("/", (req, res) => {
  app.get("/", (req, res) => {
    res.send("Hello from my GitHub Actions Docker container!");
  });
});

app.listen(80, () => {
  console.log(`Server is running on port 80`);
});
