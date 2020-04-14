import React, {Component} from 'react';
import {Button, Dropdown, Form, Icon, Image, Menu} from 'semantic-ui-react'
import SearchInput from "./SearchInput";
import SearchSelector from "./SearchSelector";
import AccountNav from "../Account/AccountNav";
import CartNav from "./CartNav";
import {MediaContextProvider, Media} from "../../media/media";
import Link from "next/link";


class NavBar extends Component {
    state = {
        activeItem: '',
        isClicked: false,
    }

    changeButtonIcon = () => this.setState({isCardView: !this.state.isCardView})


    render() {


        const nav = {
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
            width: "100vw !important",
            maxWidth: "100vw !important"
        }
        const {activeItem} = this.state
        return (
            <div>
                <MediaContextProvider>
                    {/*DESKTOP*/}
                    <Media greaterThanOrEqual="xl">
                        <nav style={{
                            backgroundColor: "white",
                            width: "100vw !important",
                            zIndex: "900",
                            position: "sticky"
                        }}>
                            <Menu borderless={true} secondary={true} className="nav-height" style={nav}>
                                <Link href={"/"}>
                                    <Menu.Item header={true} className="nav-header">
                                        <Image src={"/horse.png"} size={'mini'} alt={"Logo MDEquitation"}/>
                                        <h1><span className="capital-color">MD</span><span
                                            className="minimal-color">Equitation</span></h1>
                                    </Menu.Item>
                                </Link>
                                <div className={"my-auto ml-2"} style={{borderRadius: "20px"}}
                                     onClick={this.changeButtonIcon}>
                                    <Button
                                        onClick={this.props.sidebarAnimation('overlay').bind(this)}
                                        circular
                                        style={{
                                            backgroundColor: "rgb(243, 243, 243)",
                                            color: "rgb(97,97,97)",
                                            minWidth: "100%"
                                        }}
                                    >
                                        {this.state.isCardView ? <Icon name={"close"} style={{color: "#916e49"}}/> :
                                            <Icon name={"list layout"}/>}
                                        Menu
                                    </Button>
                                </div>
                                <Menu.Item className="mx-auto my-auto">
                                    <div className="mr-1">
                                        <SearchSelector/>
                                    </div>
                                    <SearchInput/>
                                </Menu.Item>
                                <Menu.Menu position='right' className="nav-items">

                                    <Menu.Item className="mr-2">
                                        <AccountNav/>
                                    </Menu.Item>
                                    <div className="mr-3 my-auto">
                                        <CartNav/>
                                    </div>
                                </Menu.Menu>
                            </Menu>
                        </nav>
                    </Media>

                    {/*TABLETS*/}
                    <Media at="lg">
                        <nav style={{
                            backgroundColor: "white",
                            width: "100vw !important",
                            maxWidth: "100vw !important",
                            zIndex: "900",
                            position: "sticky"
                        }}>
                            <Menu borderless={true} secondary={true} className="nav-height" style={nav}>
                                <Link href="/">
                                    <Menu.Item header={true} active={activeItem === 'logout'} className="nav-header"
                                            onClick={this.handleItemClick}>
                                        <Image src={"/horse.png"} size={'mini'} alt={"Logo MDEquitation"}/>
                                        <h1><span className="capital-color">MD</span><span
                                            className="minimal-color">Equitation</span></h1>
                                    </Menu.Item>
                                </Link>
                                <div className={"my-auto ml-1"} style={{borderRadius: "20px"}}
                                     onClick={this.changeButtonIcon}>
                                    <Button
                                        onClick={this.props.sidebarAnimation('overlay').bind(this)}
                                        circular
                                        style={{
                                            backgroundColor: "rgb(243, 243, 243)",
                                            color: "rgb(97,97,97)",
                                            minWidth: "60px"
                                        }}
                                    >
                                        {this.state.isCardView ? <Icon name={"close"} style={{color: "#916e49"}}/> :
                                            <Icon name={"list layout"}/>}
                                        Menu
                                    </Button>
                                </div>
                                <Menu.Item className="mx-auto my-auto">
                                    <SearchInput/>
                                </Menu.Item>
                                <Menu.Menu position='right' className="nav-items">

                                    <Menu.Item className="mr-2">
                                        <AccountNav/>
                                    </Menu.Item>
                                    <div className="mr-2 my-auto">
                                        <CartNav/>
                                    </div>
                                </Menu.Menu>
                            </Menu>
                        </nav>
                    </Media>

                    {/*MOBILE Large*/}
                    <Media at="md">
                        <nav style={{backgroundColor: "white", width: "100vw !important", maxWidth: "100vw !important"}}>
                            <Menu borderless={true} secondary={true} className="nav-height" style={nav}>
                                <Menu.Menu position='left' className="nav-items">
                                    <div className="ml-1 my-auto ">
                                        <Dropdown
                                            icon='bars'
                                            button
                                            className='icon'
                                        >
                                            <Dropdown.Menu className={"mt-2"} style={{width: '97.5vw'}}>
                                                <Dropdown.Header content='🎉 Bienvenue Elie Dupré'/>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item><Icon name={"user"}/> Mon Compte</Dropdown.Item>
                                                <Dropdown.Item><Icon name={"settings"}/> Paramètres</Dropdown.Item>
                                                <Dropdown.Item><Icon name={"sign out"}/> Déconnexion</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="mx-auto my-auto">
                                        <Dropdown
                                            icon='search'
                                            button
                                            simple
                                            className='icon'
                                        >
                                            <Dropdown.Menu className={"mt-2"} style={{width: "84vw"}}>
                                                <Form>
                                                    <Form.Input icon={{name: 'search', link: true}} size={"large"}
                                                                placeholder={"Rechercher..."}/>
                                                </Form>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </Menu.Menu>
                                <div className="mx-auto my-auto">
                                <Link href="/">
                                    <Menu.Item active={activeItem === 'logout'} onClick={this.handleItemClick}>
                                        <Image src={"/horse.png"} size={'mini'} alt={"Logo MDEquitation"}/>
                                        <h1><span className="capital-color">MD</span><span
                                            className="minimal-color">Equitation</span></h1>
                                    </Menu.Item>
                                </Link>
                                </div>
                                <Menu.Menu className="nav-items">
                                    <div className={"mr-2 my-auto"}>
                                        <CartNav/>
                                    </div>
                                </Menu.Menu>
                            </Menu>
                        </nav>
                    </Media>

                    {/*MOBILE Large*/}
                    <Media at="sm">
                        <nav style={{backgroundColor: "white", width: "100vw !important", maxWidth: "100vw !important",}}>
                            <Menu borderless={true} secondary={true} className="nav-height" style={nav}>
                                <Menu.Menu position='left' className="nav-items">
                                    <div className="ml-1 my-auto ">
                                        <Dropdown
                                            icon='bars'
                                            button
                                            className='icon'
                                        >
                                            <Dropdown.Menu className={"mt-2"} style={{width: '97.5vw'}}>
                                                <Dropdown.Header content='🎉 Bienvenue Elie Dupré'/>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item><Icon name={"user"}/> Mon Compte</Dropdown.Item>
                                                <Dropdown.Item><Icon name={"settings"}/> Paramètres</Dropdown.Item>
                                                <Dropdown.Item><Icon name={"sign out"}/> Déconnexion</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="mx-auto my-auto">
                                        <Dropdown
                                            icon='search'
                                            button
                                            simple
                                            className='icon'
                                        >
                                            <Dropdown.Menu className={"mt-2"} style={{width: "84vw"}}>
                                                <Form>
                                                    <Form.Input icon={{name: 'search', link: true}} size={"large"}
                                                                placeholder={"Rechercher..."}/>
                                                </Form>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </Menu.Menu>
                                <div className="mx-auto my-auto">
                                <Link href="/">
                                    <Menu.Item active={activeItem === 'logout'} onClick={this.handleItemClick}>
                                        <Image src={"/horse.png"} size={'mini'} alt={"Logo MDEquitation"}/>
                                        <h1><span className="capital-color">MD</span><span
                                            className="minimal-color">Equitation</span></h1>
                                    </Menu.Item>
                                </Link>
                                </div>
                                <Menu.Menu className="nav-items">
                                    <div className={"mr-2 my-auto"}>
                                        <CartNav/>
                                    </div>
                                </Menu.Menu>
                            </Menu>
                        </nav>
                    </Media>

                    {/*XS MOBILE*/}
                    <Media lessThan="sm">
                        <nav style={{backgroundColor: "white", width: "100vw !important", maxWidth: "100vw !important",}}>
                            <Menu borderless={true} secondary={true} className="nav-height" style={nav}>
                                <Menu.Menu position='left' className="nav-items">
                                    <div className="ml-1 my-auto ">
                                        <Dropdown
                                            icon='bars'
                                            button
                                            className='icon'
                                        >
                                            <Dropdown.Menu className={"mt-2"} style={{width: '97.5vw'}}>
                                                <Dropdown.Header content='🎉 Bienvenue Elie Dupré'/>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item><Icon name={"user"}/> Mon Compte</Dropdown.Item>
                                                <Dropdown.Item><Icon name={"settings"}/> Paramètres</Dropdown.Item>
                                                <Dropdown.Item><Icon name={"sign out"}/> Déconnexion</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="mx-auto my-auto">
                                        <Dropdown
                                            icon='search'
                                            button
                                            simple
                                            className='icon'
                                        >
                                            <Dropdown.Menu className={"mt-2"} style={{width: "84vw"}}>
                                                <Form>
                                                    <Form.Input icon={{name: 'search', link: true}} size={"large"}
                                                                placeholder={"Rechercher..."}/>
                                                </Form>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </Menu.Menu>
                                <div className="mx-auto my-auto">
                                    <h1><a href={"http://www.google.fr"}><span className="capital-color">MD</span><span
                                        className="minimal-color">Equitation</span></a></h1>
                                </div>
                                <Menu.Menu className="nav-items">
                                    <div className={"mr-2 my-auto"}>
                                        <CartNav/>
                                    </div>
                                </Menu.Menu>
                            </Menu>
                        </nav>
                    </Media>
                </MediaContextProvider>
            </div>
        )
    }
}


export default NavBar;
