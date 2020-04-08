import React, {Component} from 'react';
import {List, Divider, Container, Icon, Header} from "semantic-ui-react";
import {MediaContextProvider, Media} from "../../media/media";
class Footer extends Component {
    render() {
        const footer = {
            width: "100vw !important",
            minHeight: "550px",
            maxHeight: "550px",
            backgroundColor: "white",
            padding: "40px",
            marginTop: "20px",
        }

        const ftweight = {
            fontWeight: "600",
            fontSize: '1.15rem',
            padding: '10px !important'
        }

        return (
            <MediaContextProvider>
                <footer style={footer}>
                    <Divider style={{width: "40vw", margin:"auto", }}/>
                    <Divider hidden/>
                    <Divider hidden/>
                    <Divider hidden/>
                    <Media greaterThanOrEqual="xl">
                        <List horizontal>
                            <List.Item as={'a'} style={ftweight} href='#'>A propos</List.Item>
                            <List.Item as={'a'} style={ftweight} href='#'>Nous Contacter</List.Item>
                            <List.Item as={'a'} style={ftweight} href='#'>Plan du Site</List.Item>
                        </List>

                        <List floated='right' horizontal>
                            <List.Item as={'a'} style={ftweight} disabled href='#'>
                                © MDEquitation, SARL
                            </List.Item>
                            <List.Item as={'a'} style={ftweight} href='#'>Conditions</List.Item>
                            <List.Item as={'a'} style={ftweight} href='#'>Cookies & Confidentialité</List.Item>
                            <List.Item as={'a'} style={ftweight} href='#'>Mentions Légales</List.Item>
                        </List>
                        <Divider hidden/>
                        <Divider hidden/>
                        <Container textAlign='center'>
                            <h3> Suivez nous .. </h3>
                            <List horizontal>
                                <List.Item >
                                    <Icon style={{margin:"10px"}} color={"brown"} name={"facebook f"} link size='large' />
                                    <Icon style={{margin:"10px"}} color={"brown"} name={"twitter"} link size='large'  />
                                    <Icon style={{margin:"10px"}} color={"brown"} name={"instagram"} link size='large' />
                                </List.Item>
                            </List>
                        </Container>
                        <Divider hidden/>
                        <Divider hidden/>
                        <Container textAlign='center'>
                            <p style={{margin:"0"}}>© 2020 Copyright MDEquitation.com</p>
                            <p>Tout droits réservés</p>
                        </Container>
                        <Divider hidden/>
                        <Container textAlign='center'>
                            <p style={{color: "grey"}} >Site web développé & conçu par <a href={"http://www.saschasalles.com"}>Sascha Sallès</a></p>
                        </Container>
                    </Media>

                    <Media lessThan="xl">
                        <Container textAlign='center'>
                            <Header> Suivez nous .. </Header>
                            <List horizontal>
                                <List.Item >
                                    <Icon style={{margin:"10px"}} color={"brown"} name={"facebook f"} link size='large' />
                                    <Icon style={{margin:"10px"}} color={"brown"} name={"twitter"} link size='large'  />
                                    <Icon style={{margin:"10px"}} color={"brown"} name={"instagram"} link size='large' />
                                </List.Item>
                            </List>
                            <List>
                                <List.Item style={ftweight} disabled href='#'>
                                    © MDEquitation, SARL
                                </List.Item>
                                <List.Item as={'a'} style={ftweight} href='#'>A propos</List.Item>
                                <List.Item as={'a'} style={ftweight} href='#'>Nous Contacter</List.Item>
                                <List.Item as={'a'} style={ftweight} href='#'>Plan du Site</List.Item>
                                <List.Item as={'a'} style={ftweight} href='#'>Conditions</List.Item>
                                <List.Item as={'a'} style={ftweight} href='#'>Cookies & Confidentialité</List.Item>
                                <List.Item as={'a'} style={ftweight} href='#'>Mentions Légales</List.Item>
                            </List>
                            <p style={{margin:"0"}}>© 2020 Copyright MDEquitation.com</p>
                            <p>Tout droits réservés</p>
                            <Divider hidden/>
                            <p style={{color: "grey"}} >Site web développé & conçu par <a href={"http://www.saschasalles.com"}>Sascha Sallès</a></p>
                            <Divider hidden/>
                        </Container>

                    </Media>


                </footer>
            </MediaContextProvider>
        );
    }
}

export default Footer;