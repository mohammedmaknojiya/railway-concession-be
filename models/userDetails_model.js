const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name field is required"],
  },
  rollNumber: {
    type: String,
    required: [true, "Roll Number field is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  emailID: {
    type: String,
    required: [true, "Email is required"],
  },
  contact: {
    type: String,
    required: [true, "Contact number is required"],
  },
  dob: {
    type: String,
    required: [true, "DOB is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  pinCode: {
    type: String,
    required: [true, "Pin code is required"],
  },
  sourceStation: {
    type: String,
    required: [true, "Source station is required"],
  },
  destinationStation: {
    type: String,
    required: [true, "Destination station is required"],
  },
  prevPassNumber: {
    type: String,
    required: [true, "prePassNumber is required"],
  },
  oldVoucherNumber: {
    type: String,
    required: [true, "Old voucher number is required"],
  },
  oldPassExpiryDate: {
    type: String,
    required: [true, "Old pass expiry date is required"],
  },
  branch: {
    type: String,
    required: [true, "Branch is required"],
  },
  academicYear: {
    type: String,
    required: [true, "Academic year is required"],
  },
  semester: {
    type: String,
    required: [true, "Semester is required"],
  },
  passDuration: {
    type: String,
    required: [true, "Pass duration is required"],
  },
  travelClass: {
    type: String,
    required: [true, "Travel class is required"],
  },
  appliedDate: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: String,
    default: "Not Issued",
  },
  remarks: {
    type: String,
    default: "No Remarks",
  },
  enrollmentNumber: {
    type: String,
    required: [true, "Enrollment Number is required"],
  },
});

const UsersDetails = mongoose.model(
  "usersDetails",
  userDetailsSchema,
  "usersDetails"
);

exports.UsersDetails = UsersDetails;
