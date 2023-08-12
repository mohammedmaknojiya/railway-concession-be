const { UsersDetails } = require("../models/userDetails_model");

const addUser = async (req, res) => {
  const userData = req.body;

  //generating unique enrollment number
  const { fullName, rollNumber, contact } = userData;

  const enrollmentNumber =
    fullName.slice(0, 2).toUpperCase() +
    rollNumber.slice(rollNumber.length - 2) +
    contact.slice(contact.length - 2);

  try {
    const newUser = new UsersDetails({
      ...userData,
      enrollmentNumber,
    });
    const result = await newUser.save();
    res
      .status(201)
      .json({ message: "User details added successfully", result });
  } catch (err) {
    return res.send({
      message: "Unable to add user details",
      err,
    });
  }
};

const getUserDetails = async (req, res) => {
  const { emailID } = req.params;
  try {
    if (emailID) {
      const result = await UsersDetails.findOne({ emailID });
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({
          message: `Unable to find user details with emailID: ${emailID}`,
        });
      }
    }
  } catch (err) {
    return res.send({
      message: "Unable to find user details",
      err,
    });
  }
};

const getUserList = async (req, res) => {
  try {
    const result = await UsersDetails.find();
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(404).json({
        message: `Unable to fetch applications list`,
      });
    }
  } catch (err) {
    return res.send({
      message: "Unable to fetch applications list",
      err,
    });
  }
};

exports.addUser = addUser;
exports.getUserList = getUserList;
exports.getUserDetails = getUserDetails;
