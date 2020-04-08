import React,{Component, createRef} from 'react';
import NavBar from "../components/Nav/NavBar";
import {Sticky, Header, Segment, Container, Grid, Item, Button, Icon, Label} from "semantic-ui-react";
import Footer from "../components/Layout/Footer";
import LeftSideBar from "../components/Layout/LeftSideBar";
import HomeCaroussel from "../components/HomeCaroussel";
import ArticleCard from "../components/ArticleCard";
import { Media, MediaContextProvider } from "../media/media";


export default class Index extends Component{
    state = {
        animation: 'overlay',
        direction: 'left',
        visible: false,
    }

    contextRef = createRef()

    handleAnimation = (animation) => () =>
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))


    render()
    {

        const { animation, direction, visible } = this.state


        return (
            <MediaContextProvider>
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

                                <Media greaterThanOrEqual="lg">
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
                                </Media>

                                <Media lessThan="lg">
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
                                </Media>
                            </div>

                        </Container>
                    </Segment>
                    <Footer/>

                </div>
            </MediaContextProvider>
        );
    }
}
