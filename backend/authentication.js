const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signin", function (req, res) {
  const body = req.body;

  console.log(`received: ${JSON.stringify(body)}`);
  //   console.log("request sent");
  //   res.json({
  //     username: username,
  //     pass: pass,
  //   });

  const token = jwt.sign(body.username, "secret");
  res.json({ token: token });
});

app.get("/users", function (req, res) {
  const authorization = req.headers["authorization"];
  console.log(authorization);

  try {
    jwt.verify(authorization, "secret");
  } catch (e) {
    res.send(`error: ${e}`);
  }

  res.json([
    { name: "sam", age: "18" },
    { name: "shambhu", age: 16 },
  ]);
});

app.listen(3000, () => {
  console.log("server up and running!");
});
