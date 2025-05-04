const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sreeyadalla@gmail.com",
      pass: "bwbd nzym jtps uqjt"

    }
  });
