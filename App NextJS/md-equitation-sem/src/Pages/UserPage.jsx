import React, {Component, createRef} from 'react';
import NavBar from "../Components/NavBar";
import {Sticky, Menu, Container, Header, Button, Icon, Responsive, Segment} from "semantic-ui-react";
import LeftSideBar from "../Components/LeftSideBar";
import Footer from "../Components/Footer";
import faker from 'faker';
import Orders from "../Components/Orders";

class UserPage extends Component {
    state = {
        animation: 'overlay',
        direction: 'left',
        visible: false,
        dimmed: false,
        activeItem: 'Mes Commandes',
    }

    contextRef = createRef()

    handleAnimation = (animation) => () =>
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))

    handleItemClick = (e, { name }) =>
        this.setState({activeItem: name})


    render()
    {

        const { animation, direction, visible,
            activeItem } = this.state

        let displayedMenu;

        if(activeItem === 'Mes Commandes') {
            displayedMenu = <Orders/>;
        }
        else if(activeItem === 'Mes Coupons') {
            displayedMenu = <div>Yala</div>;
        }
        else if(activeItem === 'Mes Paramètres') {
            displayedMenu = <div>Youhou</div>;
        }


        return (
            <div>
                <div ref={this.contextRef}>

                    <Sticky context={this.contextRef}>
                        <LeftSideBar
                            animation={animation}
                            direction={direction}
                            visible={visible}
                        />
                        <NavBar sideDetail={direction} sidebarAnimation={this.handleAnimation}/>
                    </Sticky>

                    <Container>
                        <div className={"mt-3"}>
                            <Segment clearing basic>
                                <Header as='h2'
                                        content={"Mon Compte"}
                                        textAlign={"left"}
                                        floated={"left"}
                                        subheader="Suivez vos commandes et accedez à vos paramètres"
                                        style={{fontSize:"2em"}}/>

                                <Header as='h3'
                                        content={faker.name.findName()}
                                        floated={"right"}
                                        dividing
                                        icon={"user circle"}
                                        style={{marginTop:'10px'}}
                                />
                            </Segment>
                                <Responsive minWidth={960}>
                                    <Menu pointing secondary>
                                        <Menu.Item
                                            name='Mes Commandes'
                                            active={activeItem === 'Mes Commandes'}
                                            icon={'box'}
                                            onClick={this.handleItemClick}
                                        />
                                        <Menu.Item
                                            name='Mes Coupons'
                                            active={activeItem === 'Mes Coupons'}
                                            icon={'tags'}
                                            onClick={this.handleItemClick}
                                        />
                                        <Menu.Item
                                            name='Mes Paramètres'
                                            active={activeItem === 'Mes Paramètres'}
                                            icon={'wrench'}
                                            onClick={this.handleItemClick}
                                        />
                                        <Menu.Menu position='right'>
                                            <Menu.Item
                                                name='Déconnexion'
                                                active={activeItem === 'Déconnexion'}
                                                onClick={this.handleItemClick}
                                            >
                                            <Button className={"btn-shop"}>
                                                <Icon name='sign out' />
                                                Déconnexion
                                            </Button>
                                            </Menu.Item>
                                        </Menu.Menu>
                                    </Menu>
                                    <div className={"mt-2"}>
                                        {displayedMenu}
                                    </div>

                                </Responsive>
                            </div>
                    </Container>








                    <Footer/>
                </div>
            </div>
        );
    }
}

export default UserPage;