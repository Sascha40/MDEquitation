import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "../Assets/horse.png"
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";
const Login = () => (
    <div>
        <Grid textAlign='center' style={{ marginTop:"120px", marginBottom: "50px" }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' style={{color:"rgb(48, 122, 86)", fontFamily:"'Nunito', sans-serif"}} textAlign='center'>
                    <Image src={logo} style={{margin: "0" }} size={"tiny"}/> Connexion à mon compte
                </Header>
                <Form size="large">
                    <Segment basic padded={"very"}>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Adresse Mail' style={{height: "45px", fontSize: "1.1rem"}}/>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Mot de Passe'
                            type='password'
                            style={{height: "45px",fontSize: "1.1rem"}}
                        />
                        <a href={"http://www.google.com"} style={{color: "gray"}}>Mot de passe ou Identifiant oublié ?</a>

                        <Button color='brown' style={{marginTop: "20px", fontFamily:"'Nunito', sans-serif"}} circular  size='large' >
                            Connexion
                        </Button>
                    </Segment>
                </Form>
                <Message floating compact>
                    Pas encore de compte <span role={"img"} aria-label={"emoji"}>😱</span><Link to={'/inscription'} style={{color:"rgb(48, 122, 86)"}}>Je m'inscris</Link>
                </Message>
            </Grid.Column>
        </Grid>
        <Footer/>
    </div>
)

export default Login;