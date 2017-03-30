import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  onItemPressed() {
    Actions.empCreate({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onItemPressed.bind(this)}>
      <View>
        <CardSection>
          <Text style={styles.textStyle}>{name}</Text>
        </CardSection>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default ListItem;
