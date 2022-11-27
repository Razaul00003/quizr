const router = require("express").Router();

//import it from controller
const { postResult, results } = require("../controllers/quizController");
router.post("/results", results);
router.post("/post-result", postResult);

module.exports = router;
