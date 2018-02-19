import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../redux/actions/actions';

const ClickButton = props => <button onClick={() => props.type()}>Decrement</button>;

const mapDispatchToProps = dispatch => ({
  type: () => dispatch(decrement()),
});
export default connect(null, mapDispatchToProps)(ClickButton);
