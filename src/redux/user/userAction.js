export const startProcess = () => {
  return {
    type: "START_PROCESS"
  };
};

export const fetchSuccess = response => {
  return {
    type: "FETCH_SUCCESS",
    payload: response
  };
};

export const fetchFailure = error => {
  return {
    type: "FETCH_FAILURE",
    payload: error
  };
};

export const stopProcess = () => {
  return {
    type: "START_PROCESS"
  };
};


