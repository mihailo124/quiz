import { ADD_QUESTION, CHANGE_QUESTION, DELETE_QUESTION } from "../actions";

const addQuestionReducer = (
  state: Array<any> = [],
  action: { type: any; payload?: any }
) => {
  switch (action.type) {
    case ADD_QUESTION:
      return [...state, { id: state.length, text: "What's up?" }];

    case CHANGE_QUESTION:
      const newState = [...state];
      newState[state.findIndex(el => el.id === action.payload.id)].text =
        action.payload.text;
      return [...newState];

    case DELETE_QUESTION:
      const updatedState = [...state];
      updatedState.splice(
        updatedState[state.findIndex(el => el.id === action.payload.id)],
        1
      );
      console.log(updatedState);

      return [...updatedState];

    default:
      return state;
  }
};

export default addQuestionReducer;
