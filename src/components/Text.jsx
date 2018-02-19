import { connect } from 'react-redux';
import React from 'react';

const Text = props => (
  <p>{props.value}</p>
);
const mapStateToProps = state => ({
  value: state.counter.count,
});
export default connect(mapStateToProps, null)(Text);

