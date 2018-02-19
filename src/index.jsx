import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './redux/store';
import Text from './components/Text';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';

// const render = () => {
//   const Container = (props) => {


//   };
//   Container.propTypes = {
//     value: PropTypes.number.isRequired,
//   };

//   const toRender = () => (
//     <Provider>
//       <div>
//         <Container value={store.getState().counter.abc} />
//         <button onClick={() => store.dispatch(settingAction)}>Click Me</button>
//       </div>
//     </Provider>
//   );

//   const watch = () => {
//     ReactDOM.render(toRender(), document.getElementById('root'));
//   };
//   store.subscribe(watch);

//   ReactDOM.render(
//     toRender(),
//     document.getElementById('root'),
//   );
// };
// export default render;


const Container = () => (
  <Provider store={store()}>
    <div>
      <Text />
      <IncrementButton />
      <DecrementButton />
    </div>
  </Provider>
);

const bleh = () => {
  ReactDOM.render(<Container />, document.getElementById('root'));
};

export default bleh;
