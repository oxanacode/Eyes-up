const lessonModel = require('../../models/lesson');

exports.getLessons = async (req, res) => {
  try {
    const query = req.query.complexity
      ? { language: req.query.language, complexity: req.query.complexity }
      : { language: req.query.language };
    const dataToFind = await lessonModel.find(query);

    res.json(dataToFind);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};