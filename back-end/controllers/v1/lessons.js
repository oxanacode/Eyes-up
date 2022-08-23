const lessonModel = require('../../models/lesson');

exports.getLessons = async (req, res) => {
  try {
    const query = req.query.complexity
      ? { layout: req.query.layout, complexity: req.query.complexity }
      : { layout: req.query.layout };
    const dataToFind = await lessonModel.find(query).sort({"index": 1});

    res.json(dataToFind);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};