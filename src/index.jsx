import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import store from './redux/store';
import settingAction from './redux/actions';

const render = () => {
  const Container = props => (
    <div>Hello World {props.value}</div>
  );
  Container.propTypes = {
    value: PropTypes.number.isRequired,
  };

  const toRender = () => (
    <div>
      <Container value={store.getState().counter.abc} />
      <button onClick={() => store.dispatch(settingAction)}>Click Me</button>
    </div>
  );

  const watch = () => {
    ReactDOM.render(toRender(), document.getElementById('root'));
  };
  store.subscribe(watch);

  ReactDOM.render(
    toRender(),
    document.getElementById('root'),
  );
};
export default render;
