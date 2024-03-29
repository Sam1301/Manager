import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
      </Provider>
    );
  }
}

export default App;
