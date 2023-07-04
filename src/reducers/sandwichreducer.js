import { GET_SANDWICHES_LISTS } from "../actions/productAction";

let initialState = {
  title: "Tester",
  getSandwichLists: false,
  errorSandwichLists: false,
};
const sandwich = (state = initialState, action) => {
  switch (action.type) {
    case GET_SANDWICHES_LISTS:
      return {
        ...state,
        getSandwichLists: action.payload.data,
        errorSandwichLists: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default sandwich;
