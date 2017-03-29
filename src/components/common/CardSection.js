import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={[styles.viewStyle, props.style]}>
    {props.children}
  </View>
);

const styles = {
  viewStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
