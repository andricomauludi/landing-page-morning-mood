import { GET_RICES_LISTS } from "../actions/productAction";

let initialState = {
  title: "Tester",
  getRiceLists: false,
  errorRiceLists: false,
};
const rice = (state = initialState, action) => {
  switch (action.type) {
    case GET_RICES_LISTS:
      return {
        ...state,
        getRiceLists: action.payload.data,
        errorRiceLists: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default rice;
