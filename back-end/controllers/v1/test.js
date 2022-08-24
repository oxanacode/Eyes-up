const testModel = require('../../models/test');

exports.getTest = async (req, res) => {
  try {
    const dataToFind = await testModel.aggregate([{$sample:{size:1}}]);

    res.json(dataToFind);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.addTest = async (req, res) => {
  const data = new testModel({
    en: req.body.en,
    ru: req.body.ru,
  });

  try {
    const dataToSave = await data.save();

    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateTest = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const options = { new: true };
    const dataToUpdate = await testModel.findByIdAndUpdate(id, data, options);

    res.status(200).json(dataToUpdate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteTest = async (req, res) => {
  try {
    const dataToDelete = await testModel.findByIdAndDelete(req.params.id);

    res.status(200).json(dataToDelete);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};