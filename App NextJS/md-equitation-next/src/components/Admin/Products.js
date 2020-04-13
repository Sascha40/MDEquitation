import {    Dimmer, 
            Card, 
            Icon, 
            Container, 
            Loader,TextArea, 
            Form, 
            Header, 
            List, 
            Checkbox, 
            Divider, 
            Table, 
            Button,
            Progress, 
            Modal, 
            Image,   
            Accordion,
            Tab} from 'semantic-ui-react';
import { withFirebase } from '../../firebase';
import React, { Component } from 'react'
import AddArticle from './AddArticle'


const INITIAL_STATE = {
    articles: [],
    articleid:null,
    isAddOpen: false,
    isUpdateOpen: false,
    loading: false,
    activeIndex: -1, 
    name: '',
    brand: '',
    reference: '',
    price: '',
    crossedprice: '',
    stock: '',
    weight: '',
    height: '',
    width: '',
    lenght: '',
    description: '',
    isOnTop: false,
    error: false,
    progress: 0
}

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...INITIAL_STATE
        };
    }

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

    addModalOpen = () => this.setState({isAddOpen: true})
    addModalClose = () => this.setState({isAddOpen: false})

    updateModalOpen = () => {
        this.setState({isUpdateOpen: true})
    }

    updateModalClose = () => {
        this.setState({isUpdateOpen: false})
    }

    
    deleteArticle(articleid){
        this.props.firebase
            .article(articleid).delete();
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    onChange = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value })
    }

    onCheckboxChange = () => {
        this.setState(({ isOnTop }) => ({ isOnTop: !isOnTop }))
    }

    setArticleId = (articleid) => {
        this.setState(({articleid}))
    }

    onSubmit = (event) => {
        const { name,
                brand,
                reference,
                price,
                crossedprice,
                stock,
                weight,
                height,
                width,
                lenght,
                description,
                isOnTop,
                articleid
            } = this.state;

            this.props.firebase 
            .article(articleid)
                .set({
                    Name: name,
                    Brand: brand,
                    Reference: reference,
                    Price: price,
                    CrossedPrice: crossedprice,
                    Stock: stock,
                    Weight: weight,
                    Height: height,
                    Width: width,
                    Lenght: lenght,
                    Description: description,
                    isOnTop: isOnTop,
                    addDate: Date.now()
                })
            .catch(error => {
                this.setState({error: error.message})
            });
            event.preventDefault()
            
    }


    render() {
        const { articles, isAddOpen, activeIndex, isUpdateOpen, loading, articleid } = this.state
        return (
            <div>
                <AddArticle open={isAddOpen}
                        onOpen={this.addModalOpen}
                        onClose={this.addModalClose} />  

                <Container>
                {loading &&        
                    <Dimmer active inverted>
                        <Loader size='large'>Chargement</Loader>
                    </Dimmer>
                }
                    <Card.Group centered>
                            <Card as='a' onClick={this.addModalOpen}>
                                <Card.Content textAlign="center">
                                    <Card.Header>Articles</Card.Header>
                                    <Card.Meta>143 articles</Card.Meta>
                                    <Card.Description>
                                        Ajouter <Icon color="yellow" name="add circle" size="large"/>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            <Card as='a'>
                                <Card.Content textAlign="center">
                                    <Card.Header>Catégories</Card.Header>
                                    <Card.Meta>143 categories</Card.Meta>
                                    <Card.Description>
                                        Ajouter <Icon color="orange" name="add circle" size="large"/>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                    </Card.Group>

                    
                <Divider hidden/>
                <Divider hidden/>

                <Table basic="very">
                    <Table.Header>
                    <Table.HeaderCell><Icon name="pencil"/></Table.HeaderCell>
                    <Table.HeaderCell width={4}>Articles</Table.HeaderCell>
                    <Table.HeaderCell width={3}>Marque</Table.HeaderCell>
                    <Table.HeaderCell width={3}>Catégorie</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Prix</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Prix Barré</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Date D'ajout</Table.HeaderCell>
                    <Table.HeaderCell width={1}>Stock</Table.HeaderCell>
                    <Table.HeaderCell width={2}>Supprimer</Table.HeaderCell>
                    </Table.Header>
                </Table>
                    <Table celled striped padded basic="very">
                        {articles.map((article, index) => (
                            <Table.Row>
                                <Accordion>
                                    <Accordion.Title
                                        active={activeIndex === index}
                                        index={index}
                                        onClick={this.handleClick}>
                                        <Table.Row>
                                        <Icon name='dropdown' />
                                            <Table.Cell width={4}>
                                                {article.Name}
                                            </Table.Cell>
                                            <Table.Cell width={3}>
                                                {article.Brand}
                                            </Table.Cell>
                                            <Table.Cell width={3}>
                                                Catégorie
                                            </Table.Cell>
                                            <Table.Cell width={1} >
                                                {article.Price}
                                            </Table.Cell>
                                            <Table.Cell width={1} >
                                                {article.CrossedPrice}
                                            </Table.Cell>
                                            <Table.Cell width={2} >
                                                {article.addDate} 
                                            </Table.Cell>
                                            <Table.Cell width={1}>
                                                {article.Stock}
                                            </Table.Cell>
                                            <Table.Cell width={2}>
                                            <Button onClick={() => this.deleteArticle(article.articleid)} circular compact color="orange" icon='trash'/>
                                            </Table.Cell>
                                        </Table.Row>  
                                </Accordion.Title>      
                                    <Accordion.Content active={activeIndex === index}>
                                        <Form onSubmit={() => this.onSubmit}>
                                            <Form.Input fluid label='Nom' placeholder={article.Name} value={this.state.name}
                                                        name="name" onChange={this.onChange.bind(this)}/>
                                            <Form.Input fluid label='Marque' placeholder={article.Brand} value={this.state.brand}
                                                        name="brand" onChange={this.onChange.bind(this)}/>
                                            <Form.Input fluid label='Référence' placeholder={article.Reference} value={this.state.reference}
                                                        name="reference" onChange={this.onChange.bind(this)}/>
                                            <Form.Input fluid label='Prix' placeholder={article.Price} value={this.state.price}
                                                        name="price" onChange={this.onChange.bind(this)}/>
                                            <Form.Input label='Prix barré' fluid placeholder={article.CrossedPrice} value={this.state.crossedprice}
                                                        name="crossedprice" onChange={this.onChange.bind(this)}/>
                                            <Form.Input label='Stock' fluid value={this.state.stock}
                                                        name="stock" placeholder={article.Stock} onChange={this.onChange.bind(this)}/>
                                            <Form.Input label='Poids' fluid placeholder={article.Weight} value={this.state.weight}
                                                        name="weight" onChange={this.onChange.bind(this)}/>
                                            <Form.Input label='Hauteur' fluid placeholder={article.Height} value={this.state.height}
                                                        name="height" onChange={this.onChange.bind(this)}/>
                                            <Form.Input label='Largeur' fluid placeholder={article.Width} value={this.state.width}
                                                        name="width" onChange={this.onChange.bind(this)}/>
                                            <Form.Input label='Longueur' fluid placeholder={article.Lenght} value={this.state.lenght}
                                                        name="lenght" onChange={this.onChange.bind(this)}/>
                                            <Form.Field label='Description' control={TextArea} placeholder={article.Description}
                                                        value={this.state.description} name="description" onChange={this.onChange.bind(this)}/>
                                            <Form.Field 
                                                control={Checkbox}
                                                checked={this.state.isOnTop}
                                                label={<label>Mettre en page d'accueil</label>}
                                                name='isTop'
                                                onChange = {this.onCheckboxChange.bind(this)}
                                            /> 
                                            {this.state.error && error.message}         
                                            <Button type="submit" 
                                                    floated="right" 
                                                    color="yellow" 
                                                    content="Editer" 
                                                    icon="pencil" 
                                                    labelPosition="right"
                                                    onClick={() => this.setArticleId(article.articleid)}/>
                                        </Form>
                                    </Accordion.Content>
                                </Accordion>
                            </Table.Row>
                        ))}
                    </Table>
                </Container>
            </div>
        )
    }
}

export default withFirebase(Products);