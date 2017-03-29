import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
  }
  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = (state) => {

};

export default connect(null, { employeeFetch })(EmployeeList);
