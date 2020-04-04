import React from 'react'
import {Button, Form, Grid, Header, Image, Menu, Message, Segment} from 'semantic-ui-react'
import Link from 'next/link'
import Footer from "../components/Footer";
const Connexion = () => (
    <div>
        <Menu secondary borderless>
            <Link href={"/"}>
                <Menu.Item header={true} className="nav-header">
                    <Image src={"/horse.png"} size={'mini'} alt={"Logo MDEquitation"}/>
                    <h1><span className="capital-color">MD</span><span
                        className="minimal-color">Equitation</span></h1>
                </Menu.Item>
            </Link>
        </Menu>
        <Grid textAlign='center' style={{ marginTop:"120px", marginBottom: "50px" }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' style={{color:"rgb(48, 122, 86)", fontFamily:"'Nunito', sans-serif"}} textAlign='center'>
                    <Image src={"/horse.png"} style={{margin: "0" }} size={"tiny"}/> Connexion à mon compte
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
                    Pas encore de compte <span role={"img"} aria-label={"emoji"}>😱</span><Link href={'/inscription'}><a style={{color:"rgb(48, 122, 86)"}}>Je m'inscris</a></Link>
                </Message>
            </Grid.Column>
        </Grid>
        <Footer/>
    </div>
)

export default Connexion;