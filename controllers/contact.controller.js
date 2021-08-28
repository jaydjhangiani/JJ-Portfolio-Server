const Contact = require("../models/Contact");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

exports.contact = async function (req, res, next) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    occupation,
    companyName,
    purpose,
    message,
  } = req.body;

  try {
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      occupation,
      companyName,
      purpose,
      message,
    });

    try {
      await sendEmail({
        to: email,
      });

      res.status(200).json({
        success: true,
        data: "email sent!",
      });
    } catch (error) {
      return next(new ErrorResponse("Email Could not be sent!", 500));
    }

    res.json(contact);
  } catch (error) {
    next(error);
  }
};
