const initialState = {
  loading: false,
  error: "",
  data: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_PROCESS":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: ""
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

      case "STOP_PROCESS":
        return {
          ...state,
          loading: false,
        };

    default:
      return state;
  }
};

export default userReducer;
