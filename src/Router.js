import { Router, Scene, Actions } from 'react-native-router-flux';
import React from 'react';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth' intial>
        <Scene
          key='login'
          component={LoginForm}
          title='Login'
        />
      </Scene>
      <Scene key='main'>
        <Scene
          key='empList'
          component={EmployeeList}
          title='Employees'
          rightTitle='Add'
          onRight={() => Actions.empCreate()}
          intial
        />

        <Scene
          key='empCreate'
          component={EmployeeCreate}
          title='New Employee'
        />
      </Scene>
    </Router>
  );
export default RouterComponent;
