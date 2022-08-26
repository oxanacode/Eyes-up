const userModel = require('../../models/user');

exports.getUsers = async (req, res) => {
  try {
    const dataToFind = await userModel.find();

    res.status(200).json(dataToFind);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};