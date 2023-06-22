import axios from "axios";

export const GET_PRODUCTS_LISTS = "GET_PRODUCT_LISTS";

export const getProductLists = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8090/api/product")
      .then(function (response) {
        dispatch({
          type: GET_PRODUCTS_LISTS,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type:GET_PRODUCTS_LISTS,
          payload:{
            data: false,
            errorMessage:error.message,
          }

        })
      })
      .finally(function () {
        // always executed
      });
  };
};
