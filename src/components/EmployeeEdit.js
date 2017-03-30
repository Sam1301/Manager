import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Dialog } from './common';
import EmployeeForm from './EmployeeForm';
import { propChanged, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
  state = { showDialog: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.propChanged({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Upcoming shift on ${shift}`);
  }

  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showDialog: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => { this.setState({ showDialog: !this.state.showDialog }); }} >
            Fire
          </Button>
        </CardSection>
        <Dialog
          visible={this.state.showDialog}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire {this.props.name} ?
        </Dialog>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { propChanged,
  employeeSave,
  employeeDelete })(EmployeeEdit);
