import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.makeListDatabase(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.makeListDatabase(nextProps);
  }

  makeListDatabase(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(props.employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employeeList, (val, uid) => ({ ...val, uid }));
  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
