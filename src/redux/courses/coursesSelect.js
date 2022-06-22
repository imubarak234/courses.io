const SELECT = 'courses.io/redux/courses/SELECT';

const initialState = [];

export const select = (payload) => ({
  type: SELECT,
  payload,
});

const coursesSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT:
      return [action.payload];
    default:
      return state;
  }
};

export default coursesSelectReducer;
