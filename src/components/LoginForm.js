import React, { Component } from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {

    state= {
        email: '',
        password: '',
        error: ''
    };

    onButtonPress() {
        const {email, password} = this.state;

        //returns a promise, when a call is made 
        //and information is returned we can make use of the promise
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email.password)
            .catch({
                this.setState({error:'Authentication Failed!!'});
            });
        });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder = "user@gmail.com" 
                        value= {this.state.email}
                        onChangeText = {email => this.setState({email})}   
                        label = "Email"         
                    />
                </CardSection>

                <CardSection >
                    <Input 
                        placeholder="password"
                        value = {this.state.password}
                        onChangeText = {password => this.setState({password})}
                        label = "Password"
                        secureTextEntry
                    />
                </CardSection>

                <Text style = {styles.errorTextstyle}>
                {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress = {this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextstyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;