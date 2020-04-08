import React from 'react'
import {Button, Form, Grid, Header, Image, Menu, Message, Segment} from 'semantic-ui-react'
import Link from 'next/link'
import Footer from "../components/Layout/Footer";
import SignInForm from "../components/SignIn/SignInForm"
import { withFirebase } from "../firebase"
import { compose } from "recompose";


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
                    <SignIn />
                    <Message floating compact>
                    Pas encore de compte <span role={"img"} aria-label={"emoji"}>😱</span><Link href={'/inscription'}><a style={{color:"rgb(48, 122, 86)"}}>Je m'inscris</a></Link>
                </Message>
            </Grid.Column>
        </Grid>
        
        <Footer/>
    </div>
  );



const SignIn = withFirebase(SignInForm)

  export default Connexion;

  export { SignIn };