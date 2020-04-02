import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "../Assets/horse.png"
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";

const Signin = () => (
<div>
    <Grid textAlign='center' style={{ marginTop:"120px", marginBottom:"50px" }}>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' style={{color:"rgb(48, 122, 86)", fontFamily:"'Nunito', sans-serif"}} textAlign='center'>
                <Image src={logo} style={{margin: "0" }} size={"tiny"}/> Créer mon compte
            </Header>
            <Form size="large">
                <Segment basic padded={"very"}>
                    <Form.Input fluid icon='address card' iconPosition='left' placeholder='Prénom' style={{height: "45px", fontSize: "1.1rem"}}/>
                    <Form.Input fluid icon='address card' iconPosition='left' placeholder='Nom' style={{height: "45px", fontSize: "1.1rem"}}/>
                    <Form.Input fluid icon='envelope' iconPosition='left' placeholder='Adresse Mail' style={{height: "45px", fontSize: "1.1rem"}}/>
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Mot de Passe'
                        type='password'
                        style={{height: "45px",fontSize: "1.1rem"}}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Confirmez le Mot de Passe'
                        type='password'
                        style={{height: "45px",fontSize: "1.1rem"}}
                    />
                    <Form.Checkbox style={{marginTop: "20px"}} label={"J'accepte les conditions générales de ventes"}/>
                    <Button color='brown' style={{marginTop: "20px", fontFamily:"'Nunito', sans-serif"}} circular  size='large' >
                        Je m'inscris
                    </Button>
                </Segment>
            </Form>
            <Message floating compact>
                <span role={"img"} aria-label={"emoji"}>🎉</span><Link to={'/connexion'} style={{color:"rgb(48, 122, 86)"}}>J'ai déjà un compte</Link>
            </Message>
        </Grid.Column>
    </Grid>
    <Footer />
</div>
)

export default Signin;