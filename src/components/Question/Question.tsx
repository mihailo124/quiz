import React, { useState } from "react";
import styles from "./Question.module.css";
import { connect } from "react-redux";

type QuestionProps = {
  id: number;
  changeQuestion: any;
  text: string;
};

const Question: React.FC<QuestionProps> = ({ id, changeQuestion, text }) => {
  const [value, setValue] = useState(text);

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionInputWrapper}>
        <input
          type={"text"}
          value={value}
          className={styles.input}
          onChange={e => setValue(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => changeQuestion(id, value)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = (
  dispatch: (obj: {
    type: string;
    payload: { id: number; text: string };
  }) => any
) => {
  return {
    changeQuestion: (id: number, text: string) =>
      dispatch({ type: "CHANGE_QUESTION", payload: { id, text } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
