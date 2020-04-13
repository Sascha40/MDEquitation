import React from 'react'
import {Button, Form, Input, Segment, Loader, Message} from 'semantic-ui-react'
import Router from 'next/router';


class ResetPasswordBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          email: '',
          chargement: false,
          error: null,
          errorMessage: ''
        };
    }

    onChange = event => {
      this.setState({ [event.currentTarget.name]: event.currentTarget.value })
      if (this.state.error){
        this.setState({error: null})
      }
    };

    onSubmit(event) {
        const email = this.state.email;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
        this.setState({ email: '', errorMessage: '', chargement: false});
            })
        .catch(error => {
            this.setState({ error });
        });

        event.preventDefault();
      };



    render () {
        const { email, error, chargement } = this.state;
        const isInvalid = email === '';

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

                        {error &&  <Message floating color='brown'>{error.message}</Message>}
                        
                        <Button color='brown' 
                                type="submit" 
                                disabled={isInvalid} 
                                style={{marginTop: "20px", fontFamily:"'Nunito', sans-serif"}} 
                                circular  
                                size='large' >
                            Réinitialiser
                        </Button>

                    {chargement &&  <Loader style={{marginTop:"127px"}} active/>}
                    </Segment>
                </Form>
            </div>
        )
    }
};

export default ResetPasswordBase;