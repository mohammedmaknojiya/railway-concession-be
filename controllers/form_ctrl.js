const addUser = (req, res) => {
  res.status(201).json({ message: "User added successfully" });
};

const getUserList = (req, res) => {
  res.status(200).json({ data: [{ id: 1, name: "abc" }] });
};

exports.addUser = addUser;
exports.getUserList = getUserList;
