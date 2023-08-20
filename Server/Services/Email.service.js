const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});



const sendEmail = async (options) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  console.log(mailOptions);
  return new Promise((resolve, reject) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      reject(false);
    } else {
      console.log("Email sent: " + info.response);
      resolve(true);
    }
  });
})

};

module.exports = sendEmail;