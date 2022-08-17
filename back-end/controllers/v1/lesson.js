const lessonModel = require('../../models/lesson');

exports.getLesson = async (req, res) => {
  try {
    const dataToFind = await lessonModel.findById(req.params.id);

    res.json(dataToFind);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.addLesson = async (req, res) => {
  const data = new lessonModel({
    language: req.body.language,
    name: req.body.name,
    complexity: req.body.complexity,
    text: req.body.text
  });

  try {
    const dataToSave = await data.save();

    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const options = { new: true };
    const dataToUpdate = await lessonModel.findByIdAndUpdate(id, data, options);

    res.status(200).json(dataToUpdate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const dataToDelete = await lessonModel.findByIdAndDelete(req.params.id);

    res.status(200).json(dataToDelete);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};