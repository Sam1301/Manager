import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Input, CardSection, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {

  // dispatch action creator
  onEmailChanged(text) {
      this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
      this.props.passwordChanged(text);
  }

  render() {
    const { password, email } = this.props;
    return (
      <Card>
      <CardSection>
        <Input
        value={email}
        label="Email"
        placeholder="email@gmail.com"
        onChangeText={this.onEmailChanged.bind(this)}
        />
      </CardSection>
      <CardSection>
        <Input
        value={password}
        label="Password"
        secureTextEntry
        placeholder="password"
        onChangeText={this.onPasswordChanged.bind(this)}
        />
      </CardSection>
      <CardSection>
        <Button>
          Login
        </Button>
      </CardSection>
    </Card>
  );
  }
}

const mapStateToProps = ({ auth }) => {
    const { email, password } = auth;
    return { email, password };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
