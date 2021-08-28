const sgMail = require("@sendgrid/mail");

const sendEmail = (options) => {
  sgMail.setApiKey(process.env.EMAIL_PASSWORD);

  const msg = {
    to: options.to,
    from: process.env.EMAIL_FROM,
    templateId: process.env.EMAIL_TEMPLATE,
    dynamic_template_data: {
      firstName: "JAy",
      websiteURL: "https://jaydjhangiani.in",
    },
  };

  // console.log(msg);
  sgMail.send(msg, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent");
    }
  });
};

module.exports = sendEmail;
