import {
  ADD_QUESTION,
  CHANGE_QUESTION,
  DELETE_QUESTION,
  DELETE_ALL_QUESTIONS
} from "../actions";
import generateQuestion from "../utils/randomQuestionGenerator";

const addQuestionReducer = (
  state: Array<any> = [],
  action: { type: any; payload?: any }
) => {
  switch (action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        {
          id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
          text: generateQuestion()
        }
      ];

    case CHANGE_QUESTION:
      const newState = [...state];
      newState[state.findIndex(el => el.id === action.payload.id)].text =
        action.payload.text;
      return [...newState];

    case DELETE_QUESTION:
      const updatedState = [...state];
      updatedState.splice(
        state.findIndex(el => el.id === action.payload.id),
        1
      );
      return [...updatedState];

    case DELETE_ALL_QUESTIONS:
      return [];

    default:
      return state;
  }
};

export default addQuestionReducer;
