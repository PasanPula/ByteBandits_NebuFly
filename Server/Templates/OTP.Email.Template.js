// an email template that can be used with Nodemailer to send emails

const HTML_TEMPLATE = (text) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>SmartGPA</title>
          <style>
            .container {
              width: 100%;
              height: 100%;
              padding: 20px;
              background-color: #f4f4f4;
            }
            .email {
              width: 80%;
              margin: 0 auto;
              background-color: #FFFFFF;
              padding: 20px;
            }
            .email-header {
              background-color: #ddd;
              color: #0000FF;
              padding: 20px;
              text-align: center;
            }
            .email-body {
              padding: 20px;
            }
            .email-footer {
              background-color: #ddd;
              color: #0000FF;
              padding: 20px;
              text-align: center;
            }

            .c-email__content__text {
              font-size: 20px;
              text-align: center;
              color: #343434;
              margin-top: 0;
            }
            .c-email__code {
              display: block;
              width: 60%;
              margin: 30px auto;
              background-color: #ddd;
              border-radius: 40px;
              padding: 20px;
              text-align: center;
              font-size: 36px;
              font-family: "Open Sans";
              letter-spacing: 10px;
              box-shadow: 0px 7px 22px 0px rgba(0, 0, 0, 0.1);
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="email">
              <div class="email-header">
                <h1>Wellcome to nebufly</h1>
              </div>
              <div class="email-body">
                <h3>Hi there!</h3>
                <p>Thank you for registering with nebufly. Please use the following code to verify your email address:</p>
              

                <h4> your code , </h4>

                <div class="c-email__code">
                      <span class="c-email__code__text">${text}</span>
                </div>

                <p> the code is valid for 5 minutes</p>

                <p>Once you have verified your email address, you will be able to login to your account.</p>

                <p>If you have any questions, please contact us at <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a>.</p>
               
                <p>Thank you,</p>
                <p>nebufly Team.</p>



               
              </div>
              <div class="email-footer">
              <p>Contact us at <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a>.</p>
              <p>copy right 2021</p>
              <p>nebufly Team</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
};

module.exports = HTML_TEMPLATE;
