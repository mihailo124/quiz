import React, { useState } from "react";
import styles from "./App.module.css";
import { connect } from "react-redux";

import Question from "./components/Question/Question";

type AppProps = {
  addQuestion: any;
  questions: [];
};

type questionElement = { id: number; text: string };

const App: React.FC<AppProps> = ({ addQuestion, questions }) => {
  return (
    <div className={styles.App}>
      {questions.map((el: questionElement, id) => (
        <Question key={id} id={id} text={el.text} />
      ))}
      <button className={styles.addQuestionBtn} onClick={addQuestion}>
        + add question
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = (dispatch: (obj: { type: string }) => any) => {
  return {
    addQuestion: () => dispatch({ type: "ADD_QUESTION" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
