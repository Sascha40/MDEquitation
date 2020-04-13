import React,{Component, createRef} from 'react';
import NavBar from "../components/Nav/NavBar";
import {Sticky, Header, Segment, Dimmer, Loader, Container, Grid, Item, Button, Icon, Label, Card} from "semantic-ui-react";
import Footer from "../components/Layout/Footer";
import LeftSideBar from "../components/Layout/LeftSideBar";
import HomeCaroussel from "../components/HomeCaroussel";
import ArticleCard from "../components/ArticleCard";
import { Media, MediaContextProvider } from "../media/media";
import { withFirebase } from "../firebase"

class Index extends Component{
    state = {
        animation: 'overlay',
        direction: 'left',
        visible: false,
        articles: [],
        loading: false
    }

    contextRef = createRef()

    handleAnimation = (animation) => () =>
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))

    componentDidMount() {
        this.setState({ loading: true });
        this.unsubscribe = this.props.firebase
            .articles()
            .onSnapshot(snapshot => {
                let articles = [];
                snapshot.forEach(doc =>
                    articles.push({ ...doc.data(), articleid: doc.id }),
                );
                this.setState({
                    articles,
                    loading: false
                    });
            });
    }
        
    componentWillUnmount() {
        this.unsubscribe();
    }
    
    render()
    {

        const { animation, direction, visible, articles, loading } = this.state


        return (
            <MediaContextProvider>
            {loading &&        
                <Dimmer active inverted>
                    <Loader size='large'>Chargement</Loader>
                </Dimmer>
            }
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
                                    <Card.Group centered>
                                    {articles.map(article => (
                                                article.isOnTop && 
                                                <ArticleCard 
                                                    image={article.url}
                                                    name={article.Name}
                                                    brand={article.Brand}
                                                    price={`${article.Price}€`}
                                                    crossedprice={`${article.CrossedPrice}€`}
                                                />
                                        ))}
                                    </Card.Group>
                                </Media>

                                <Media lessThan="lg">
                                    <Item.Group divided>
                                        {articles.map(article => (
                                            <Item key={article.articleid}>
                                                <Item.Image src='https://picsum.photos/300/300' />
                                                <Item.Content>
                                                    <Item.Header as='a'>{article.Name}</Item.Header>
                                                    <Item.Meta>
                                                        <span className='cinema'>{article.Brand}</span>
                                                    </Item.Meta>
                                                    <Item.Description>{article.Description}</Item.Description>
                                                    <div>
                                                        <h2 style={{color:"rgb(143, 94, 58)"}}>{article.Price}€
                                                            <h5 style={{color:"black"}}>
                                                                <del>{article.CrossedPrice}€</del>
                                                            </h5>
                                                        </h2>
                                                        
                                                    </div>
                                                    
                                                    <Item.Extra>
                                                        <Label>En stock</Label>
                                                        <Button className={"btn-shop"} floated='right'>
                                                            <Icon name='add to cart' /> Ajouter au panier
                                                        </Button>
                                                    </Item.Extra>
                                                </Item.Content>
                                            </Item>
                                        ))}
                                        
                                        
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


export default withFirebase(Index);