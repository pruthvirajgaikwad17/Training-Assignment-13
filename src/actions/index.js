import Axios from "axios";
import store from "../store";

export const fetchPost = () => {
  return async (dispatch, getState) => {
    await Axios.post("https://eucs23v2.ksearchnet.com/cs/v2/search", {
      context: { apiKeys: ["klevu-160320037354512854"] },
      recordQueries: [
        {
          id: "configLayoutProducts564",
          typeOfRequest: "SEARCH",
          settings: {
            query: { term: "bags" },
            typeOfRecords: ["KLEVU_PRODUCT"],
            limit: 12,
            typeOfSearch: "WILDCARD_AND",
          },
        },
      ],
    }).then((response) => {
      window.yourGlobalVariable = response.data.queryResults[0].records;

      //console.log(response.data.queryResults[0].records);
    });
    const allData = window.yourGlobalVariable;

    dispatch({
      type: "FETCH_POSTS",
      payload: allData,
    });
  };
};

export const lowHigh = () => {
  return {
    type: "LOW_HIGH_POSTS",
    payload: store.getState().postsReducer.item,
  };
};

export const highLow = () => {
  return {
    type: "HIGH_LOW_POSTS",
    payload: store.getState().postsReducer.item,
  };
};
