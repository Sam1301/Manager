// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// create component
const Header = (props) => {
  const { textStyle } = styles;
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.text}</Text>
    </View>
  );
};

// convention to add styles to the same component file
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    height: 50,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      widht: 0,
      height: 2
    },
    marginBottom: 5,
    elevation: 2,
    position: 'relative'
  }
};

// make the component available to other parts of our app
export { Header };
