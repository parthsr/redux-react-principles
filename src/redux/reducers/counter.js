const initialState = {
  count: 1,
};

const counter = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return { ...initialState, count: state.count + 1 };
  }
  if (action.type === 'DECREMENT') {
    return { ...initialState, count: state.count - 1 };
  }
  return state;
};

export default counter;
