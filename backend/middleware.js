// app.mjs or app.js (if "type": "module" is in package.json)
import express from "express";
const app = express();

let requestCount = 0;

function isOldEnough(req, res, next) {
  const age = req.query.age;
  if (age > 18) {
    next();
  } else {
    res.json({
      msg: "grow up!",
    });
  }
}

function hasMoney(req, res, next) {
  const money = req.query.money;
  if (money > 100) {
    next();
  } else {
    res.json({
      msg: "you are poor!",
    });
  }
}

app.use(function (req, res, next) {
  requestCount++;
  next();
});

app.get("/ride1", isOldEnough, hasMoney, function (req, res) {
  res.json({
    msg: "enjoy the ride!",
    rq: requestCount,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
