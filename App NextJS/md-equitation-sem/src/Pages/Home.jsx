import React,{Component, createRef} from 'react';
import NavBar from "../Components/NavBar";
import {Sticky, Header, Segment, Container, Grid, Item, Responsive, Button, Icon, Label} from "semantic-ui-react";
import Footer from "../Components/Footer";
import LeftSideBar from "../Components/LeftSideBar";
import HomeCaroussel from "../Components/HomeCaroussel";
import ArticleCard from "../Components/ArticleCard";

export default class Home extends Component{
    state = {
        animation: 'overlay',
        direction: 'left',
        visible: false,
        dimmed: false
    }

    contextRef = createRef()

    handleAnimation = (animation) => () =>
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))


    render()
    {

        const { animation, direction, visible } = this.state


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



                    {/* Content */}
                    <Segment basic padded>
                        <Container>

                            <HomeCaroussel />

                            <Header as={'h2'} className={"mt-3"}>
                                Nos Produits Phares !
                            </Header>

                            <div className={'mt-3'}>

                                <Responsive minWidth={1100}>
                                    <Grid columns={4} className={"mx-auto"}>
                                        <Grid.Column>
                                            <ArticleCard />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ArticleCard />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ArticleCard />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ArticleCard />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ArticleCard />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ArticleCard />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ArticleCard />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <ArticleCard />
                                        </Grid.Column>
                                    </Grid>
                                </Responsive>
                                <Responsive maxWidth={1099.98}>
                                    <Item.Group divided>

                                        <Item>
                                            <Item.Image src='https://picsum.photos/300/300' />

                                            <Item.Content>
                                                <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                                                <Item.Meta>
                                                    <span className='cinema'>IFC Cinema</span>
                                                </Item.Meta>
                                                <Item.Description>Un super article détaillé</Item.Description>
                                                <Item.Extra>
                                                    <Label>En stock</Label>
                                                    <Button className={"btn-shop"} floated='right'>
                                                        <Icon name='add to cart' /> Ajouter au panier
                                                    </Button>

                                                </Item.Extra>
                                            </Item.Content>
                                        </Item>
                                        <Item>
                                            <Item.Image src='https://picsum.photos/300/300' />

                                            <Item.Content>
                                                <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                                                <Item.Meta>
                                                    <span className='cinema'>IFC Cinema</span>
                                                </Item.Meta>
                                                <Item.Description>Un super article détaillé</Item.Description>
                                                <Item.Extra>
                                                    <Label>En stock</Label>
                                                    <Button className={"btn-shop"} floated='right'>
                                                        <Icon name='add to cart' /> Ajouter au panier
                                                    </Button>

                                                </Item.Extra>
                                            </Item.Content>
                                        </Item>
                                        <Item>
                                            <Item.Image src='https://picsum.photos/300/300' />

                                            <Item.Content>
                                                <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                                                <Item.Meta>
                                                    <span className='cinema'>IFC Cinema</span>
                                                </Item.Meta>
                                                <Item.Description>Un super article détaillé</Item.Description>
                                                <Item.Extra>
                                                    <Label>En stock</Label>
                                                    <Button className={"btn-shop"} floated='right'>
                                                        <Icon name='add to cart' /> Ajouter au panier
                                                    </Button>

                                                </Item.Extra>
                                            </Item.Content>
                                        </Item>

                                    </Item.Group>
                                </Responsive>
                            </div>

                        </Container>
                    </Segment>
                    <Footer/>

                </div>

            </div>
        );
    }
}
