const quizModel = require("../models/quizModel");

module.exports.postResult = async (req, res) => {
  const { userName, category, result } = req.body;
  console.log(userName, category, result);
  try {
    const quizCreate = await quizModel.create({
      userName,
      category,
      result,
    });

    const postResponse = {
      id: quizCreate._id,
      userName: quizCreate.userName,
      category: quizCreate.category,
      result: quizCreate.result,
      time: quizCreate.createdAt,
      message: "Added to database",
    };
    res.status(201).json(postResponse);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "failed to store in database",
    });
  }
};
module.exports.results = async (req, res) => {
  const { userName } = req.body;
  try {
    const allQuiz = await quizModel.find();
    const filter = allQuiz.filter((quiz) => quiz.userName === userName);
    res.status(200).json({ filter });
  } catch (error) {
    res.status(400).json({
      message: "failed to get quiz results",
    });
  }
};
