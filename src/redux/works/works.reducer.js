import WORK_DATA from "./work.data";

const INITIAL_STATE = {
  collections: WORK_DATA,
};

const workReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default workReducer;
