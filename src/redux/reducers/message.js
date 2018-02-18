const state = {
  message: 'hello',
};

const message = (initialState = state, action) => {
  if (action.type === 'SettingABC') {
    return { message: `${initialState.message}hello` };
  }
  return initialState;
};

export default message;

