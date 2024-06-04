const jwt = require("jsonwebtoken");

const value = {
  name: "sagar",
  accNo: 123123,
};

const token = jwt.sign(value, "secret");
console.log(token);
