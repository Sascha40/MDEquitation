import React, { Component, createRef } from 'react';
import NavBar from '../components/Nav/NavBar';
import {
  Sticky,
  Header,
  Segment,
  Dimmer,
  Loader,
  Container,
  Grid,
  Item,
  Button,
  Icon,
  Label,
  Card,
  Rating
} from 'semantic-ui-react';
import Footer from '../components/Layout/Footer';
import LeftSideBar from '../components/Layout/LeftSideBar';
import HomeCaroussel from '../components/HomeCaroussel';
import { ArticleCard } from '../components/Articles/ArticleCard';
import { Media, MediaContextProvider } from '../media/media';
import { withFirebase } from '../firebase';
import Link from 'next/link';

class Index extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    visible: false,
    articles: [],
    loading: false,
  };

  contextRef = createRef();

  handleAnimation = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }));

  componentDidMount() {
    this.setState({ loading: true });
    this.unsubscribe = this.props.firebase.articles().onSnapshot((snapshot) => {
      let articles = [];
      snapshot.forEach((doc) =>
        articles.push({ ...doc.data(), articleid: doc.id }),
      );
      this.setState({
        articles,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { animation, direction, visible, articles, loading } = this.state;

    return (
      <MediaContextProvider>
        {loading && (
          <Dimmer active inverted>
            <Loader size="large">Chargement</Loader>
          </Dimmer>
        )}
        <div ref={this.contextRef}>
          <Sticky context={this.contextRef}>
            <LeftSideBar
              animation={animation}
              direction={direction}
              visible={visible}
            />
            <NavBar
              sideDetail={direction}
              sidebarAnimation={this.handleAnimation}
            />
          </Sticky>

          {/* Content */}
          <Segment basic padded>
            <Container>
              <HomeCaroussel />

              <Header as={'h2'} className={'mt-3'}>
                Nos Produits Phares !
              </Header>

              <div className={'mt-3'}>
                <Media greaterThanOrEqual="lg">
                  <Card.Group centered>
                    {articles.map(
                      (article) =>
                        article.isOnTop && (
                          <Link
                            href="/article/[id]"
                            as={`/article/${article.articleid}`}
                          >
                            <Card
                              as="a"
                              raised
                              style={{
                                maxWidth: '260px',
                                boxShadow:
                                  'rgb(238, 238, 238) 0px 0px 0px 1px, rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px',
                              }}
                            >
                              <img
                                src={article.url}
                                style={{
                                  objectFit: 'cover',
                                  minHeight: '260px',
                                  maxHeight: '260px',
                                }}
                              />

                              <Card.Content>
                                <Card.Header>{article.Name}</Card.Header>
                                <Card.Meta>{article.Brand}</Card.Meta>
                                <Card.Description>
                                  <Label
                                    size={'tiny'}
                                    circular
                                    content={'En stock'}
                                  />
                                  <h2
                                    style={{
                                      float: 'right',
                                      color: 'rgb(143, 94, 58)',
                                      margin: '0',
                                    }}
                                  >
                                    {article.Price}
                                  </h2>
                                  <h5 style={{ float: 'right', margin: '0' }}>
                                    <del>{article.CrossedPrice}</del>
                                  </h5>
                                </Card.Description>
                                <div className={'mt-2'}>
                                  <Rating
                                    defaultRating={3}
                                    maxRating={5}
                                    disabled
                                    style={{
                                      float: 'left',
                                      marginTop: '15px',
                                      marginBottom: '5px',
                                    }}
                                  />
                                  <Button
                                    circular
                                    animated="vertical"
                                    floated={'right'}
                                    style={{ minWidth: '75px' }}
                                    className={'btn-shop'}
                                  >
                                    <Button.Content hidden>
                                      Au panier{' '}
                                    </Button.Content>
                                    <Button.Content visible>
                                      <Icon inverted name="add to cart" />
                                    </Button.Content>
                                  </Button>
                                </div>
                              </Card.Content>
                            </Card>
                          </Link>
                        ),
                    )}
                  </Card.Group>
                </Media>

                <Media lessThan="lg">
                  <Item.Group divided>
                    {articles.map((article) => (
                      <Link
                        href="/article/[id]"
                        as={`/article/${article.articleid}`}
                      >
                        <Item as="a" key={article.articleid}>
                          <Item.Image src={article.url} />
                          <Item.Content>
                            <Item.Header as="a">{article.Name}</Item.Header>
                            <Item.Meta>
                              <span className="cinema">{article.Brand}</span>
                            </Item.Meta>
                            <Item.Description>
                              {article.Description}
                            </Item.Description>
                            <div>
                              <h2 style={{ color: 'rgb(143, 94, 58)' }}>
                                {article.Price}€
                                <h5 style={{ color: 'black' }}>
                                  <del>{article.CrossedPrice}€</del>
                                </h5>
                              </h2>
                            </div>

                            <Item.Extra>
                              <Label>En stock</Label>
                              <Button className={'btn-shop'} floated="right">
                                <Icon name="add to cart" /> Ajouter au panier
                              </Button>
                            </Item.Extra>
                          </Item.Content>
                        </Item>
                      </Link>
                    ))}
                  </Item.Group>
                </Media>
              </div>
            </Container>
          </Segment>
          <Footer />
        </div>
      </MediaContextProvider>
    );
  }
}

export default withFirebase(Index);
