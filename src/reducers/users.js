import { GET_PRODUCTS_LISTS } from "../actions/productAction";

let initialState = {
  title: "Tester",
  getProductLists: false,
  errorProductLists: false,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LISTS:
      return {
        ...state,
        getProductLists: action.payload.data,
        errorProductLists: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;
