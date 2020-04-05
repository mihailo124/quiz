import React, { useState } from "react";
import styles from "./App.module.css";
import { connect } from "react-redux";

import Question from "./components/Question/Question";
import Modal from "./components/Modal/Modal";
import { ADD_QUESTION, DELETE_ALL_QUESTIONS } from "./actions";

type AppProps = {
  addQuestion: any;
  deleteAllQuestions: any;
  questions: [];
};

type questionElement = { id: number; text: string };

const App: React.FC<AppProps> = ({
  addQuestion,
  deleteAllQuestions,
  questions
}) => {
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      <Modal show={modalShow} setModalShow={setModalShow} />
      <div className={styles.App} onDoubleClick={() => setModalShow(true)}>
        <div className={styles.questionsContainer}>
          {questions.map((el: questionElement) => (
            <Question key={el.id} id={el.id} text={el.text} />
          ))}
        </div>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.addQuestionBtn}
            onClick={() => {
              setTimeout(() => {
                window.scrollTo(0, 999999);
              });
              addQuestion();
            }}
          >
            + Add Question
          </button>
          <button
            disabled={questions.length === 0}
            className={styles.addQuestionBtn}
            onClick={deleteAllQuestions}
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = (dispatch: (obj: { type: string }) => any) => {
  return {
    addQuestion: () => dispatch({ type: ADD_QUESTION }),
    deleteAllQuestions: () => dispatch({ type: DELETE_ALL_QUESTIONS })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
