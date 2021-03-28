import React from 'react';
import firebase from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "top",
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
}

class LoginForm extends React.Component {
    state = {
        loading: false,
        user: firebase.auth().currentUser
    }
  
  
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                loading: false,
                user: user
            });
        });
    }
  
    logout() {
        firebase.auth().signOut();
    }
  
    render() {
        if (this.state.loading) return <div>loading</div>;
        return (
            <div>
              <br />
              {
                  (<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />)
              }
            </div>
        )
    }
  }

export default LoginForm;

