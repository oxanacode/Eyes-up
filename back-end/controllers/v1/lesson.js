const lessonModel = require('../../models/lesson');

exports.getLesson = async (req, res) => {
  try {
    const dataToFind = await lessonModel.findById(req.params.id);

    res.status(200).json(dataToFind);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addLesson = async (req, res) => {
  const data = new lessonModel({
    layout: req.body.layout,
    index: req.body.index,
    title: req.body.title,
    complexity: req.body.complexity,
    minAccuracy: req.body.minAccuracy,
    minSpeed: req.body.minSpeed,
    starSpeed: req.body.starSpeed,
    content: req.body.content
  });

  try {
    const dataToSave = await data.save();

    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const dataToDelete = await lessonModel.findByIdAndDelete(req.params.id);

    res.status(200).json(dataToDelete);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};