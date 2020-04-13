import React, {Component} from 'react'
import {Header, Button, Image, Responsive, Table, Icon} from 'semantic-ui-react'
import { Media } from '../../media/media'

const width = {width:"50px"}
const position = {position:"absolute", zIndex:"1200", color: "white", fontWeight:"600"}
const cssAttributes =
    {
    maxWidth:"380px",
    minWidth:"360px",
    borderRadius:"20px",
    marginTop:"-2px",
    boxShadow:"0 2px 3px 0 rgba(34,36,38,.15)",
    padding:"15px",
    marginLeft: "-320px",
    position: "absolute",
    zIndex:"2000",
    border: "solid 1px rgb(222,222,223)",
    backgroundColor: "white",
    }

class CartNav extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }



    render() {
        return (
            <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <a style={position} className="margin-cart"
                   href={"http://www.google.fr"}> 10 </a>
                <Image style={width} src={"/cart.png"} as={'a'}  href={"http://www.google.fr"}
                 />

                {this.state.isHovering &&
                <Media greaterThanOrEqual="lg">
                    <Table basic='very' padded style={cssAttributes}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan={'3'} >
                                    <Header as='h3' className="mt-1">
                                        Deniers produits ajoutés
                                    </Header>
                                    </Table.HeaderCell>
                                <br/>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='https://dummyimage.com/100x100/ccc/aaa' rounded size='huge' />
                                        <Header.Content>
                                            Article Name
                                            <Header.Subheader>3 x 99€</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell textAlign={"right"}>
                                    <Button icon basic circular >
                                        <Icon name='trash' style={{color: "rgb(59,134,83)"}}/>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='https://dummyimage.com/100x100/ccc/aaa' rounded size='huge' />
                                        <Header.Content>
                                            Article Name
                                            <Header.Subheader>3 x 99€</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell  textAlign={"right"}>
                                    <Button icon basic circular >
                                    <Icon name='trash' style={{color: "rgb(59,134,83)"}}/>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='https://dummyimage.com/100x100/ccc/aaa' rounded size='huge' />
                                        <Header.Content>
                                            Article Name
                                            <Header.Subheader>3 x 99€ </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell  textAlign={"right"}>
                                    <Button icon basic circular >
                                        <Icon name='trash' style={{color: "rgb(59,134,83)"}}/>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='https://dummyimage.com/100x100/ccc/aaa' rounded size='huge' />
                                        <Header.Content>
                                            Article Name
                                            <Header.Subheader>3 x 99€ </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell  textAlign={"right"}>
                                    <Button icon basic circular >
                                        <Icon name='trash' style={{color: "rgb(59,134,83)"}}/>
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                            <Table.Cell>
                                <Header as='h4' >
                                    Total TTC 257,88€
                                </Header>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>
                                <Button circular animated='vertical' color={"brown"}>
                                    <Button.Content hidden>Voir le panier</Button.Content>
                                    <Button.Content visible>
                                        + 7 autres...
                                    </Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        </Table.Footer>
                    </Table>

                </Media>
                }
            </div>
        )
    }
}

export default CartNav;
