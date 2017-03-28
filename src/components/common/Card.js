import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );

const styles = {
  viewStyle: {
    // style border
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,

    // style shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 1,

    // layout
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
