const userModel = require('../../models/user');

exports.getUsers = async (req, res) => {
  try {
    const dataToFind = await userModel.find();

    res.json(dataToFind);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};