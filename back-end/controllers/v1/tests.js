const testModel = require('../../models/test');

exports.getTests = async (req, res) => {
  try {
    const dataToFind = await testModel.find();

    res.status(200).json(dataToFind);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
