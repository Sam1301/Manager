import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { propChanged, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.name}
            onChangeText={(value) => this.props.propChanged({ prop: 'name', value })}
            label='Name'
            placeholder='Dave'
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.phone}
            onChangeText={(value) => this.props.propChanged({ prop: 'phone', value })}
            label='Phone'
            placeholder='01100000000'
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={styles.labelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={(value) => this.props.propChanged({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

const mapStateToProps = ({ employee }) => {
  console.log(employee);
  const { name, phone, shift } = employee;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { propChanged, employeeCreate })(EmployeeCreate);
