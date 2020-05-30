// add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     resolve(a + b);
//   });
// };

// add(20, 30)
//   .then((result) => {
//     console.log("r1", result);
//     return add(result, 10);
//   })
//   .then((result) => {
//     console.log("r", result);
//   })
//   .catch((e) => {
//     console.log("e", e);
//   });

// don = async () => {
//   const a1 = await add(10, 20);
//   const a2 = await add(a1, 20);
//   console.log("a2", a2);
// };
//  don();

// const bcryptjs = require("bcryptjs");

// const pass = "sop2p2345";

// bcryptjs
//   .hash(pass, 6)
//   .then((result) => {
//     console.log("hash password", result);
//     return bcryptjs.compare(pass, result);
//   })
//   .then((match) => {
//     console.log("match", match);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

const jsonwebtoken = require("jsonwebtoken");

const key = "eyJhbGciOiJIUzI";
const token = jsonwebtoken.sign(
  {
    userId: "3ddsfdfdfdfdsf344324324",
    email: "vivekknit786@gmail.com",
    name: "vivek gupta",
  },
  key,
  { expiresIn: "1hr" }
);

//console.log(token);

const res = jsonwebtoken.verify(token, key);
console.log(res);

const sendGrid = require("@sendgrid/mail");
console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY);
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "vivekknit786@gmail.com",
  from: "vivekguptaji@outlook.com",
  subject: "Welcome Email From NODE",
  html:
    '<strong>Welcome</strong> Vivek Gupta <a href="https://goggle.com">Link to Be</a>',
};
sendGrid
  .send(msg)
  .then((res) => {
    console.log("email success", res);
  })
  .catch((err) => {
    console.log("email err", err);
  });

console.log("PORT", process.env.PORT);
