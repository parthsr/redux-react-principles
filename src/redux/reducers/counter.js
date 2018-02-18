const state = {
  abc: 1,
};

const counter = (initialState = state, action) => {
  if (action.type === 'SettingABC') {
    return { abc: initialState.abc + 1 };
  }
  return initialState;
};

export default counter;
