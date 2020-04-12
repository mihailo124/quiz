import React, { useState, useRef } from "react";
import styles from "./Question.module.css";
import { connect } from "react-redux";

import Answers from "../Answers/Answers";
import dots from "../../assets/photos/dots.png";

type QuestionProps = {
  id: number;
  changeQuestion: (id: number, val: any) => void;
  deleteQuestion: (id: number) => void;
  enableInput: (id: number) => void;
  text: string;
  disabled: boolean;
};

const Question: React.FC<QuestionProps> = ({
  id,
  changeQuestion,
  text,
  deleteQuestion,
  enableInput,
  disabled,
}) => {
  const [value, setValue] = useState(text);
  const input = useRef<HTMLInputElement>(null);

  const enterPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnterBlingHandler();
      changeQuestion(id, event.currentTarget.value);
    }
  };

  const onEnterBlingHandler = () => {
    let c = 100;
    let x = setInterval(() => {
      c -= 10;
      const color = `rgba(255, 255, 255, ${(c * 0.012).toFixed(2)})`;
      input.current!.style.background = color;
      if (c < 0) clearInterval(x);
    }, 30);
  };

  const onDelete = () => {
    if (!disabled) enableInput(-1);
    deleteQuestion(id);
  };

  return (
    <div className={styles.questionContainer} onClick={() => enableInput(id)}>
      <div className={styles.questionInputWrapper}>
        <div className={styles.goBackButton} onClick={onDelete}>
          ×
        </div>
        <input
          disabled={disabled}
          ref={input}
          type={"text"}
          value={value}
          className={styles.input}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(event) => enterPressHandler(event)}
        />
        <button
          className={styles.button}
          onClick={() => {
            changeQuestion(id, value);
            onEnterBlingHandler();
          }}
        >
          Save
        </button>
      </div>
      {!disabled ? <Answers /> : null}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions,
  };
};

const mapDispatchToProps = (
  dispatch: (obj: {
    type: string;
    payload: { id: number; text?: string };
  }) => any
) => {
  return {
    changeQuestion: (id: number, text: string) =>
      dispatch({ type: "CHANGE_QUESTION", payload: { id, text } }),
    deleteQuestion: (id: number) =>
      dispatch({ type: "DELETE_QUESTION", payload: { id } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
