const lessonModel = require('../../models/lesson');

exports.getLessons = async (req, res) => {
  try {
    const params = req.query.complexity
      ? { language: req.query.language, complexity: req.query.complexity }
      : { language: req.query.language };
    const dataToFind = await lessonModel.find(params);

    res.json(dataToFind);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};