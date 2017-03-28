import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';
import { Card, Input, CardSection, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  // dispatch action creator
  onEmailChanged(text) {
      this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
      this.props.passwordChanged(text);
  }

  onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size={'large'} />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  
  render() {
    const { password, email, error } = this.props;
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
      <Text style={styles.errorStyle}>{error}</Text>
      <CardSection>
        {this.renderButton()}
      </CardSection>
    </Card>
  );
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
