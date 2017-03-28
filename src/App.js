import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCdM8qb072k7D3dx-W_5K3BraPv-Hg3XF0',
      authDomain: 'manager-e726e.firebaseapp.com',
      databaseURL: 'https://manager-e726e.firebaseio.com',
      storageBucket: 'manager-e726e.appspot.com',
      messagingSenderId: '881006462938'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
