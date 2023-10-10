const express = require("express");
const app = express();

app.use((req, res, next) => {
  const host = req.headers.host;
  res.set("X-Frontend-Server", `localhost:3000${host ? "/" + host : ""}`);
  res.set("X-Frontend-Server-remote", `localhost:3000${host ? "/" + host : ""}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
