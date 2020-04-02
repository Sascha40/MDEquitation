import React, {Component} from 'react';
import "./NavBar.css";
import "./styles.css";
import {Menu, Image, Responsive, Dropdown, Icon, Form, Button} from 'semantic-ui-react'
import MDLogo from '../Assets/horse.png'
import SearchInput from "./SearchInput";
import SearchSelector from "./SearchSelector";
import AccountNav from "./AccountNav";
import CartNav from "./CartNav";

class NavBar extends Component {
    state = {
        activeItem: '',
        isClicked:false,
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    changeButtonIcon = () => this.setState({ isCardView: !this.state.isCardView })



    render() {


        const nav = {
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
            width: "100vw !important",
        }
        const { activeItem } = this.state
        return (
            <div>

            {/*DESKTOP*/}

                <Responsive minWidth={1280}>
                    <nav style={{backgroundColor:"white", width:"100vw !important", zIndex:"900", position:"sticky"}}>
                        <Menu borderless={true} secondary={true} className="nav-height" style={nav}>
                            <Menu.Item header={true} active={activeItem === 'logout'} className="nav-header" onClick={this.handleItemClick}>
                                <Image src={MDLogo} size={'mini'} alt={"Logo MDEquitation"}/>
                                <h1><span className="capital-color">MD</span><span className="minimal-color">Equitation</span></h1>
                            </Menu.Item>
                            <div className={"my-auto ml-2"} style={{borderRadius:"20px"}} onClick={this.changeButtonIcon}>
                                <Button
                                    onClick={this.props.sidebarAnimation('overlay').bind(this)}
                                    circular
                                    style={{backgroundColor: "rgb(243, 243, 243)", color: "rgb(97,97,97)", minWidth:"100%"}}
                                >
                                    {this.state.isCardView ? <Icon name={"close"} style={{color:"#916e49"}}/> : <Icon name={"list layout"}/>}
                                    Menu
                                </Button>
                            </div>
                            <Menu.Item className="mx-auto my-auto">
                                <div className="mr-1">
                                    <SearchSelector/>
                                </div>
                                <SearchInput />
                            </Menu.Item>
                            <Menu.Menu position='right' className="nav-items">

                                <Menu.Item className="mr-2">
                                    <Responsive minWidth={780}>
                                        <AccountNav />
                                    </Responsive>
                                </Menu.Item>
                                <div className="mr-2 my-auto">
                                    <CartNav/>
                                </div>
                            </Menu.Menu>
                        </Menu>
                    </nav>
                </Responsive>

            {/*TABLETS*/}
                <Responsive minWidth={960} maxWidth={1279.98}>
                    <nav style={{backgroundColor:"white", width:"100vw !important",zIndex:"900", position:"sticky"}}>
                        <Menu borderless={true} secondary={true} className="nav-height" style={nav}>
                            <Menu.Item header={true} active={activeItem === 'logout'} className="nav-header" onClick={this.handleItemClick}>
                                <Image src={MDLogo} size={'mini'} alt={"Logo MDEquitation"}/>
                                <h1><span className="capital-color">MD</span><span className="minimal-color">Equitation</span></h1>
                            </Menu.Item>
                            <div className={"my-auto ml-1"} style={{borderRadius:"20px"}} onClick={this.changeButtonIcon}>
                                <Button
                                    onClick={this.props.sidebarAnimation('overlay').bind(this)}
                                    circular
                                    style={{backgroundColor: "rgb(243, 243, 243)", color: "rgb(97,97,97)", minWidth:"60px"}}
                                >
                                    {this.state.isCardView ? <Icon name={"close"} style={{color:"#916e49"}}/> : <Icon name={"list layout"} />}
                                    Menu
                                </Button>
                            </div>
                            <Menu.Item className="mx-auto my-auto">
                                <SearchInput />
                            </Menu.Item>
                            <Menu.Menu position='right' className="nav-items">

                                <Menu.Item className="mr-2">
                                    <AccountNav />
                                </Menu.Item>
                                <div className="mr-2 my-auto">
                                    <CartNav/>
                                </div>
                            </Menu.Menu>
                        </Menu>
                    </nav>
                </Responsive>

            {/*MOBILE*/}
                <Responsive minWidth={0} maxWidth={959.98}>
                    <nav style={{backgroundColor:"white", width:"100vw !important", maxWidth:"100vw"}}>
                        <Menu borderless={true} secondary={true} className="nav-height" style={nav}>
                            <Menu.Menu position='left' className="nav-items">
                                <div className="ml-1 my-auto ">
                                    <Dropdown
                                        icon='bars large brown'
                                        button
                                        className='icon'
                                    >
                                        <Dropdown.Menu className={"mt-2"} style={{width:'97.5vw'}}>
                                            <Dropdown.Header content='🎉 Bienvenue Elie Dupré' />
                                            <Dropdown.Divider />
                                            <Dropdown.Item ><Icon name={"user"}/> Mon Compte</Dropdown.Item>
                                            <Dropdown.Item ><Icon name={"settings"}/> Paramètres</Dropdown.Item>
                                            <Dropdown.Item ><Icon name={"sign out"}/> Déconnexion</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="mx-auto my-auto">
                                    <Dropdown
                                        icon='search large brown'
                                        button
                                        simple
                                        className='icon'
                                    >
                                        <Dropdown.Menu className={"mt-2"} style={{width:"84vw"}}>
                                            <Form>
                                                <Form.Input icon={{ name: 'search', link: true }} size={"large"} placeholder={"Rechercher..."}/>
                                            </Form>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            </Menu.Menu>
                            <div className="mx-auto my-auto">
                                <Responsive minWidth={360}>
                                    <Menu.Item active={activeItem === 'logout'} onClick={this.handleItemClick}>
                                        <Image src={MDLogo} size={'mini'} alt={"Logo MDEquitation"}/>
                                        <h1><span className="capital-color">MD</span><span className="minimal-color">Equitation</span></h1>
                                    </Menu.Item>
                                </Responsive>
                                <Responsive maxWidth={360}>
                                    <h1><a href={"http://www.google.fr"}><span className="capital-color">MD</span><span className="minimal-color">Equitation</span></a></h1>
                                </Responsive>
                            </div>
                            <Menu.Menu className="nav-items">
                                <div className={"mr-1 my-auto"}>
                                 <CartNav/>
                                </div>
                            </Menu.Menu>
                        </Menu>
                    </nav>
                </Responsive>

            </div>
        )
    }
}



export default NavBar;
