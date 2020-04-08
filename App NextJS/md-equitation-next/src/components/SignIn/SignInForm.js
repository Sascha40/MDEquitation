import React from 'react'
import {Button, Form, Input, Segment, Loader, Message} from 'semantic-ui-react'
import Router from 'next/router';


class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          email: '',
          password: '',
          errorSubmit: false,
          errorMessage: '',
          chargement: false
        };
    }

    onChange = event => {
      this.setState({ [event.currentTarget.name]: event.currentTarget.value })
      if (this.state.errorSubmit == true){
        this.setState({errorSubmit: false})
      }
    };

    onSubmit(event) {
        const email = this.state.email;
        const password = this.state.password;
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({email:'', password: '', error: '', errorMessage: '', chargement: true });
          })
          .then(() =>{
            Router.push("/compte");
          })
          .catch(error => {
            this.setState({ errorSubmit: true});
            if (error.code == 'auth/invalid-email') {
              this.setState({errorMessage: 'Adresse e-mail invalide...'})
            } else if (error.code == 'auth/user-disabled') {
              this.setState({errorMessage: 'Compte désactivé'})
            } else if (error.code == 'auth/user-not-found') {
              this.setState({errorMessage: 'Aucun compte associé à cet email...'})
            } else if (error.code == 'auth/wrong-password') {
              this.setState({errorMessage: 'Oups mot de passe incorrect...'})
            } else {
              this.setState({errorMessage: error.message})
            }
          }
          );
        event.preventDefault();
      };



    render () {
        const { email, password, errorSubmit, errorMessage, chargement } = this.state;
        const isInvalid = password === '' || email === '';

        return (
            <div>

                        <Form size="large" onSubmit={this.onSubmit.bind(this)}>
                            <Segment basic padded={"very"}>
                                <Form.Input 
                                    required
                                    control={Input}
                                    icon='user' 
                                    iconPosition='left' 
                                    value={this.state.email}
                                    name="email"
                                    placeholder='Adresse Mail' 
                                    style={{height: "45px", fontSize: "1.1rem"}}
                                    onChange={this.onChange}
                                    />

                                <Form.Input
                                    required
                                    control={Input}
                                    icon='lock'
                                    iconPosition='left'
                                    name="password"
                                    value={this.state.password}
                                    placeholder='Mot de Passe'
                                    type='password'
                                    style={{height: "45px",fontSize: "1.1rem"}}
                                    onChange={this.onChange}
                                />
                                 {errorSubmit &&  <Message floating color='brown'>{errorMessage}</Message>}
                                <a href={"http://www.google.com"} style={{color: "gray"}}>Mot de passe ou Identifiant oublié ?</a>
                                
                                <Button color='brown' 
                                        type="submit" 
                                        disabled={isInvalid} 
                                        style={{marginTop: "20px", fontFamily:"'Nunito', sans-serif"}} 
                                        circular  
                                        size='large' >
                                    Connexion
                                </Button>

                              {chargement &&  <Loader style={{marginTop:"127px"}} active/>}
                            </Segment>
                        </Form>
            </div>
        )
    }
};

export default SignInForm;