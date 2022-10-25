const initState = {
  fetching: false,
  fetched: false,
  item: [],
};
const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, item: action.payload };
    case "LOW_HIGH_POSTS":
      const data = action.payload;
      var newArr = data.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      console.log("reducer_low_high", data);
      return { ...state, item: data };
    case "HIGH_LOW_POSTS":
      const data1 = action.payload;
      var newArr = data1.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      data1.reverse();
      console.log("reducer_high_low", data1);
      return { ...state, item: data1 };
    default:
      return state;
  }
};

export default postsReducer;
