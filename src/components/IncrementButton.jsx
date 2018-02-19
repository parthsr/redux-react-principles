import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/actions/actions';

const ClickButton = props => <button onClick={() => props.type()}>Increment</button>;

const mapDispatchToProps = dispatch => ({
  type: () => dispatch(increment()),
});
export default connect(null, mapDispatchToProps)(ClickButton);
