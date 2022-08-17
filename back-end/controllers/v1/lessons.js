const lessonModel = require('../../models/lesson');

exports.getLessons = async (req, res) => {
  try {
    const params = req.query.complexity
      ? { language: req.query.language, complexity: req.query.complexity }
      : { language: req.query.language };
    let data;

    if (req.query.page && req.query.limit) {
      const page = req.query.page;
      const limit = req.query.limit;
      const dataToSkip = page - 1 * limit;
      data = await lessonModel.find(params).skip(dataToSkip).limit(limit);
    } else {
      data = await lessonModel.find(params).count();
    }

    res.json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};