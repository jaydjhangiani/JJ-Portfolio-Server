const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a first name."],
  },
  lastName: {
    type: String,
    required: [true, "Please provide a last name."],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    select: false,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email.",
    ],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide a phone number."],
    select: false,
  },
  occupation: {
    type: String,
    required: [true, "Please provide an occupation."],
    select: false,
  },
  companyName: {
    type: String,
    select: false,
  },
  purpose: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
