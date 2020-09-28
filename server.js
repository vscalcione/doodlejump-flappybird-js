const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/:game", (req, res) => {
  if (req.params.game === "/doodle-jump")
    res.sendFile(path.join(__dirname + `/${req.params.game}/index.html`));
  else res.sendFile(path.join(__dirname + `/${req.params.game}/index.html`));
});

app.use("/", router);
app.use("/:game", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
