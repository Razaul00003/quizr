import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { postResult } from "../store/actions/quizAction";

function Quiz(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const { myInfo } = useSelector((state) => state.auth);

  const url = `https://opentdb.com/api.php?amount=10&category=${params.category}&type=multiple`;

  const [questions, setQuestions] = useState([]);
  const [currQuestion, setCurrQuestion] = useState([]);
  const [index, setIndex] = useState(1);
  const [correct, setCorrect] = useState(0);

  const fetchQuestions = async (url) => {
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      console.log(data.length);
      if (data && data.length > 0) {
        setQuestions([data]);
        setCurrQuestion(data[index]);
      } else {
        console.log("something went wrong");
      }
    } else {
      return <Loading />;
    }
  };
  useEffect(() => {
    fetchQuestions(url);
  }, []);

  const { correct_answer, question, incorrect_answers } = currQuestion;
  //api is unstable , refetch question if no question is found.
  if (
    !questions &&
    !currQuestion &&
    !currQuestion.incorrect_answers &&
    !currQuestion.correct_answer
  )
    fetchQuestions();
  let answers;
  //randomizing correct answer
  const tempIndex = Math.floor(Math.random() * 4);
  if (currQuestion && incorrect_answers && correct_answer && index < 11) {
    answers = [...incorrect_answers];
    if (tempIndex === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correct_answer;
    }
  }
  const gotoNext = () => {
    console.log("index", index);
    setIndex(index + 1);
    console.log("index", index);
    if (index <= 10) {
      console.log(questions[0][index]);
      setCurrQuestion(questions[0][index]);
    }
  };
  const selectAnswerHandler = (e) => {
    e.preventDefault();
    e.target.value === correct_answer && setCorrect(correct + 1);
    console.log(e.target.value);
    if (index < 11) {
      gotoNext();
    }
  };
  let category;
  if (params.category == 22) {
    category = "Geography";
  }
  if (params.category == 21) {
    category = "Sports";
  }
  if (params.category == 17) {
    category = "Science";
  }
  if (params.category == 30) {
    category = "Science";
  }
  if (index === 10) {
    dispatch(
      postResult({ userName: myInfo.userName, category, result: correct })
    );
  }

  return (
    <>
      <div className="container-fluid py-3" style={{ background: "#d9d7f8" }}>
        <div className=" w-75 bg-white container  rounded">
          {index === 10 ? (
            <div className="h-100 w p-5 m-5">
              <h2 className="text-primary text-center">
                Your Score {correct} of 10 Quest
              </h2>
              <Link to="/profile">
                <Button className="py-2 px-3 mt-4 w-100">
                  View All scores
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {!questions ? (
                <Loading />
              ) : (
                <>
                  <div className="d-flex align-items-right justify-content-end">
                    <h6 className="text-primary text-left p-3">
                      {" "}
                      Question:
                      {index <= 10 ? index : 10}/10
                    </h6>

                    <h6 className="text-primary text-left p-3">
                      {`Correct: ${correct}`}
                    </h6>
                  </div>
                  <div className=" p-5 text-center">
                    <div>
                      <h4
                        className="text-primary my-3"
                        dangerouslySetInnerHTML={{
                          __html: question,
                        }}
                      />
                    </div>
                    <div className="row justify-content-around gap-4">
                      {answers?.map((option, index) => (
                        <Button
                          disabled={index > 10}
                          dangerouslySetInnerHTML={{ __html: option }}
                          value={option}
                          onClick={selectAnswerHandler}
                          key={index}
                          className={
                            option === 1
                              ? "col-12 col-md-6   m-1 bg-success"
                              : "col-12 col-md-6   m-1 bg-primary"
                          }
                          type="submit"
                        />
                      ))}{" "}
                    </div>
                  </div>
                  <div className="d-flex align-items-right justify-content-end">
                    <Button
                      className="bg-primary text-white px-3 py-2 me-5 rounded mb-3  "
                      onClick={gotoNext}
                    >
                      Next
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Quiz;
