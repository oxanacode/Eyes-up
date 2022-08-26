const lessonModel = require('../../models/lesson');

exports.getLessons = async (req, res) => {
  try {
    const query = req.query.complexity
      ? { layout: req.query.layout, complexity: req.query.complexity }
      : { layout: req.query.layout };
    const dataToFind = await lessonModel.find(query).sort({ "index": 1 });

    res.status(200).json(dataToFind);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};