import React from 'react';
import {Button, Form, Input, Segment, Label, Popup} from 'semantic-ui-react';
import Router from "next/router";
import FormIsValidModal from './FormIsValidModal';
import { Media } from "../../media/media";


class SignUpFormBase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
            error: false,
            errorEmail: false,
            errorPasswordLenght: false,
            errorPasswordDontMatch: false,
            errorEmailAlreadyUsed: false,
            errorCaptcha: false,
            modalOpen: false,
            errors: {
                mail: { invalid : "Email invalide", alreadyUsed: "Cet email est déjà pris" },
                passwordLenght: { content : "Votre mot de passe doit avoir 8 caractères au minimum, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial" },
                passwordDontMatch: { content : "Les mots de passes sont différents" }
            }
        }
    }

    reinitializeState = () => this.setState({
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            password2: '',
                            error: false,
                            errorEmail: false,
                            errorPasswordLenght: false,
                            errorPasswordDontMatch: false,
                            errorEmailAlreadyUsed: false,
                            errorCaptcha: false,
                            modalOpen: false
                        });




    handleModalOpen = () => {
        this.setState({ modalOpen: true })
    }

    handleModalClose = () => {
        this.setState({ modalOpen: false})
        this.reinitializeState()
    }
    
    onChange = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value })
        if (this.validateEmail(this.state.email) === false){
            this.setState({ errorEmail: false});
        }

        if (this.validatePasswordLenght(this.state.password) === false){
            this.setState({ errorPasswordLenght: false})
        }

        if (this.validatePasswordMatch(this.state.password, this.state.password2) === false){
            this.setState({ errorPasswordDontMatch: false});
        }

        if (this.state.errorEmailAlreadyUsed === true){
            this.setState({ errorEmailAlreadyUsed: false});
        }
    }

    validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePasswordLenght = (password) => {
        let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }

    validatePasswordMatch = (password, password2) => {
        if (password !== password2){
            return false;
        } else {
            return true;
        }
    }


    onSubmit(event) {
        if (this.validateEmail(this.state.email) === false){
            this.setState({ errorEmail: true});
            return;
        }

        if (this.validatePasswordLenght(this.state.password) === false){
            this.setState({ errorPasswordLenght: true});
            return;
        }

        if (this.validatePasswordMatch(this.state.password, this.state.password2) === false){
            this.setState({ errorPasswordDontMatch: true});
            return;
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(showmodal =>{
                this.setState({modalOpen: true})
                })
            .then(authUser => {
                this.setState({firstName: '', lastName: ''})
            })
            .catch(error => {
                if (error.code == 'auth/weak-password') {
                    this.setState({passwordLenght: true});
                }
                if(error.code == 'auth/email-already-in-use'){
                    this.setState({errorEmailAlreadyUsed: true});
                }
                if(error.code == 'auth/invalid-email'){
                    this.setState({errorEmail: true});
                }
            });
    
    event.preventDefault();

    };

    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            password2,
            errors,
            errorEmail,
            errorPasswordDontMatch,
            errorPasswordLenght, 
            errorEmailAlreadyUsed, 
            errorCaptcha
        } = this.state;

        const isDisabled =
            password === '' || 
            password2 === ''||
            password !== password2 ||
            email === '' ||
            firstName === '' ||
            lastName === '' ||
            errorCaptcha === true;


        return (
            <div>
                <Form onSubmit={this.onSubmit.bind(this)}>
                    <Segment basic padded={"very"}>

                        <Form.Input 
                                    control={Input}
                                    icon='address card'
                                    iconPosition='left'
                                    placeholder='Prénom'
                                    style={{height: "45px", fontSize: "1.1rem"}}
                                    name="firstName" 
                                    value={this.state.firstName} 
                                    onChange={this.onChange}
                                    required
                                    />

                        <Form.Input 
                                    control={Input}
                                    icon='address card'
                                    iconPosition='left'
                                    placeholder='Nom'
                                    style={{height: "45px", fontSize: "1.1rem"}}
                                    value={this.state.lastName}
                                    name={"lastName"}
                                    onChange={this.onChange}
                                    required
                                    />


                        <Form.Input 
                                    control={Input}
                                    error={(errorEmail &&
                                        <Label basic color='red'>
                                            {errors.mail.invalid}
                                       </Label>) || (errorEmailAlreadyUsed && <Label basic color='red'>
                                            {errors.mail.alreadyUsed}
                                        </Label>)}
                                    icon='envelope'
                                    iconPosition='left'
                                    placeholder='Adresse Mail'
                                    style={{height: "45px", fontSize: "1.1rem"}}
                                    value={this.state.email}
                                    name={"email"}
                                    onChange={this.onChange}
                                    required
                                    />

                        
            
                        <Form.Input
                                    control={Input}
                                    error={errorPasswordLenght && 
                                        <Label basic color='red'>
                                            {errors.passwordLenght.content}
                                        </Label>}
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Mot de Passe'
                                    type='password'
                                    style={{height: "45px", fontSize: "1.1rem"}}
                                    value={this.state.password}
                                    name={"password"}
                                    onChange={this.onChange}
                                    required
                                    />
            

                        <Form.Input 
                                    control={Input}
                                    error={errorPasswordDontMatch && 
                                        <Label basic color='red'>
                                            {errors.passwordDontMatch.content}
                                        </Label>}
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Confirmez le Mot de Passe'
                                    type='password'
                                    name={"password2"}
                                    style={{height: "45px", fontSize: "1.1rem"}}
                                    value={this.state.password2}
                                    onChange={this.onChange}
                                    required
                                    />
                            <div style={{marginLeft: "18px"}}>
                                
                            </div>  
                            <Popup
                                trigger={<Button type="submit"
                                                color='brown'
                                                disabled={isDisabled}
                                                style={{marginTop: "20px", fontFamily: "'Nunito', sans-serif"}}
                                                circular 
                                                size='large'>Je m'inscris</Button>
                                            }
                                content='En cliquant vous acceptez les termes et conditions ainsi que la politique de confidentialité'
                                pointing
                                basic
                                position='right center'
                                size="tiny"
                                />
                       
                        <Media at="sm">
                            <p className="mt-2" style={{color: '#4f4f4f'}}> En cliquant vous acceptez les termes et conditions ainsi que la politique de confidentialité</p>
                        </Media>
                    </Segment>
                </Form>
                
                <FormIsValidModal isOpen={this.state.modalOpen} 
                                            onClose={this.handleModalClose}
                                            userEmail={this.state.email}
                                            />
            </div>
        )
    }
}
export default SignUpFormBase;