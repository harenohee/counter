// src/modules/counter.js

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    // payload: payload, 키 밸류가 같으면 축약해서 작성(ES6)
    payload,
  };
};
export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};
// Initial State
const initialState = {
  number: 0,
};
// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        // 리듀서에서 payload를 사용하고자 할 때 => action.payload
        number: state.number + action.payload,
      };
    }
    case MINUS_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
};

// export default reducer
export default counter;
