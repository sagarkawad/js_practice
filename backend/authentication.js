const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UsersDB = [
  { username: "sagar", pass: "123123" },
  { username: "shyam", pass: "abudhabi" },
  { username: "pangunath", pass: "shadab123" },
];

function userDetails(username, pass) {
  let userDetails = { user: false, pass: false };

  for (const user of UsersDB) {
    if (username == user.username) {
      userDetails.user = true;
      if (pass == user.pass) {
        userDetails.pass = true;
      }
    }
  }
  return userDetails;
}

app.post("/signin", function (req, res) {
  const body = req.body;

  const userd = userDetails(body.username, body.pass);

  if (userd.user) {
    if (userd.pass) {
      try {
        const token = jwt.sign(body.username, "secret");
        res.json({ token });
      } catch (e) {
        res.send(e);
      }
    } else {
      res.json({ msg: "pass incorrect!" });
    }
  }

  res.json({ msg: "user does not exists!" });
});

app.get("/users", function (req, res) {
  const authorization = req.headers["authorization"];
  console.log(authorization);
  let decodedUser;

  try {
    decodedUser = jwt.verify(authorization, "secret");
    console.log(decodedUser);
  } catch (e) {
    res.send(`error: ${e}`);
  }

  const userArr = [];

  for (const user of UsersDB) {
    if (decodedUser != user.username) {
      userArr.push(user);
    }
  }

  res.json(userArr);
});

app.listen(3000, () => {
  console.log("server up and running!");
});
