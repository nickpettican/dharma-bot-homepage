import { CHANGE_LANGUAGE } from "../actions/types";

const initialState = {
  language: "en"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      let { language } = action;
      return { ...state, language };

    default:
      return state;
  }
};
