import { withRouter } from 'next/router';
import React,{Component, createRef} from 'react';
import NavBar from "../../components/Nav/NavBar";
import Footer from "../../components/Layout/Footer";
import {Sticky, Header, Segment, Loader, Dimmer, Image, Container, Grid, Item, Button, Icon, Label, Card, Divider} from "semantic-ui-react";
import LeftSideBar from "../../components/Layout/LeftSideBar";
import { withFirebase } from "../../firebase";

class Article extends Component {
  constructor(props){
      super(props);
      this.state = {
        animation: 'overlay',
        direction: 'left',
        visible: false,
        article: [],
        loading: false,
        error: null
      }
  }

  contextRef = createRef()

  handleAnimation = (animation) => () =>
        this.setState((prevState) => ({ animation, visible: !prevState.visible }))

  componentDidMount(){
    let article = []
    this.props.firebase
        .article(this.props.router.query.id)
            .get()
            .then(doc => {
                if (!doc.exists) {
                    this.setState({error})
                } else {
                    article.push(doc.data())
                    this.setState({article})
                }})
            .catch(error => {
                this.setState(error)
            })
    }


    render(){
        const { animation, direction, visible, article, loading, error} = this.state
        const price = article.map(article => article.CrossedPrice)

            return (
                <div ref={this.contextRef}>            
                    <Sticky context={this.contextRef}>
                        <LeftSideBar
                            animation={animation}
                            direction={direction}
                            visible={visible}
                        />
                        <NavBar sideDetail={direction} sidebarAnimation={this.handleAnimation}/>
                    </Sticky>

                    <Container className='mt-3' text>
                        <Header as='h2'>{article.map(article => article.Name)}
                            <Header.Subheader>{article.map(article => article.Brand)}</Header.Subheader>
                        </Header>
                    <Image rounded src={article.map(article => article.url)} size='medium'
                        label={{
                            color: 'brown',
                            content: <del>{price}€</del>,
                            ribbon: true,
                        }}/>
                    <Segment basic textAlign="right" floated="right" style={{minWidth:'200px'}} >
                        <Header as="h2" color="brown">{article.map(article => article.Price)}€</Header>
                        <Divider/>
                    </Segment>

                    <Segment basic floated="right" style={{minWidth:'200px'}} >
                        <Header as="h3">Description : </Header>
                        {article.map(article => article.Description)}

                        <Header as="h3">Informations : </Header>
                        <ul>
                            <li key={article.map(article => article.articleid)}>{article.map(article => article.Description)}</li>
                            <li key={article.map(article => article.articleid)}>Poids : {article.map(article => article.Weight)} kg</li>
                            <li key={article.map(article => article.articleid)}>Hauteur : {article.map(article => article.Height)} cm</li>
                            <li key={article.map(article => article.articleid)}>Largeur : {article.map(article => article.Width)} cm</li>
                            <li key={article.map(article => article.articleid)}>Profondeur : {article.map(article => article.Lenght)} cm</li>
                        </ul>
                    <Button circular animated='vertical' floated="right" style={{minWidth: "75px"}} className={"btn-shop"}>
                            <Button.Content hidden>Au panier </Button.Content>
                            <Button.Content visible>
                                <Icon inverted name='add to cart' />
                            </Button.Content>
                    </Button>
                    </Segment>

                    
                    </Container>
                    {error && error.message}
                    
                </div>
            );
  }
}





export default withRouter(withFirebase(Article));