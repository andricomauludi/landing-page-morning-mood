import axios from "axios";

export const GET_SANDWICHES_LISTS = "GET_SANDWICH_LISTS";
export const GET_RICES_LISTS = "GET_RICE_LISTS";

export const getSandwichLists = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8090/api/product/sandwich")
      .then(function (response) {
        dispatch({
          type: GET_SANDWICHES_LISTS,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type:GET_SANDWICHES_LISTS,
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
export const getRiceLists = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8090/api/product/rice")
      .then(function (response) {
        dispatch({
          type: GET_RICES_LISTS,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type:GET_RICES_LISTS,
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
