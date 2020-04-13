import { withRouter } from 'next/router';
import { withAuthorization, AuthUserContext } from '../../../../session';
import { withFirebase } from '../../../../firebase';
import * as ROLES from '../../../../constants/roles';
import AdminHeader from '../../../../components/Admin/Header';
import React from 'react';
import { Container, Form, Button, Header, Divider, Statistic } from 'semantic-ui-react';
import Link from 'next/link';


const INITIAL_STATE = {
    error: null,
    article: [],
    Name: '',
    Brand: '',
    Price: null,
    CrossedPrice: null,
    Stock: null,
    Weight: null,
    Height: null,
    Width: null, 
    Lenght: null,
    Description: '',
    isOnTop: false
}

class UpdateArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onCheckboxChange=this.onCheckboxChange.bind(this);
    }

    componentDidMount(){
        let article = []
        this.props.firebase
            .article(this.props.router.query.id)
                .get()
                .then(doc => {
                    if (!doc.exists) {
                      alert("Document Indisponible");
                    } else {
                      article.push(doc.data())
                      this.setState({article})
                    }})
                .catch(error => {
                    this.setState(error)
                })
    }

    onChange(event){
        const { article } = this.state;
        // this.setState({Name: article.map( article => article.Name)})
        // this.setState({Price: article.map( article => article.Price)})
        // this.setState({Brand: article.map( article => article.Brand)})
        // this.setState({CrossedPrice: article.map( article => article.CrossedPrice)})
        // this.setState({Stock: article.map( article => article.Stock)})
        // this.setState({Weight: article.map( article => article.Weight)})
        // this.setState({Height: article.map( article => article.Height)})
        // this.setState({Width: article.map( article => article.Width)})
        // this.setState({Lenght: article.map( article => article.Lenght)})
        // this.setState({Description: article.map( article => article.Description)})
        // this.setState({isOnTop: article.map( article => article.isOnTop)})

        this.setState({[event.target.name]: event.target.value})
    }

    onCheckboxChange = () => {
        this.setState(({ isOnTop }) => ({ isOnTop: !isOnTop }))
    }

    onSubmit(event){
        const { Name, Brand, Price, CrossedPrice, Stock, Weight, Height, Width, Lenght, Description, isOnTop } = this.state;
        this.props.firebase
            .article(this.props.router.query.id)
                .set({
                    Name: Name,
                    Brand: Brand,
                    Price: Price,
                    CrossedPrice: CrossedPrice,
                    Stock: Stock,
                    Weight: Weight,
                    Height: Height,
                    Width: Width,
                    Lenght: Lenght,
                    Description: Description,
                    isOnTop: isOnTop
                })
                .then(this.setState({...INITIAL_STATE}))
                .catch(error => {
                    this.setState({error})
                })
                event.preventDefault()
    }


    render(){
        const article = this.state.article
        const actualValue = 'Valeur actuelle : '
        const {Name, Brand, Price, CrossedPrice, Stock, 
                Weight, Height, Width, Lenght, Description, isOnTop, error} = this.state
    return (
        <div>
            <AdminHeader />
            <Container text>
            <Header>
                Modifier un article
                <Header.Subheader className='mt-1'>
                    <Link href="/admin/products"><Button content="Retour" icon="left arrow"/></Link>
                    <Divider hidden/>
                </Header.Subheader>
            </Header>
                <Form onSubmit={this.onSubmit}>
                    <Form.Input label={actualValue + article.map(article => article.Name)}
                        placeholder="Nom de l'article" onChange={this.onChange}
                        value={Name} name="Name"/>
                    <Form.Input label={actualValue + article.map(article => article.Brand)}
                         placeholder="Marque" value={Brand} onChange={this.onChange}
                         name="Brand"/>
                    <Form.Input label={actualValue + article.map(article => article.Price) + '€'}
                         placeholder="Prix TTC" value={Price} onChange={this.onChange}
                         name="Price"/>
                    <Form.Input label={actualValue + article.map(article => article.CrossedPrice) + '€'}
                         placeholder="Prix barré TTC" value={CrossedPrice} name="CrossedPrice"
                         onChange={this.onChange}/>
                    <Form.Input label={actualValue + article.map(article => article.Stock)}
                         placeholder="Stock" value={Stock} onChange={this.onChange} 
                         name="Stock"/>
                    <Form.Input label={actualValue + article.map(article => article.Weight)}
                         placeholder="Poids en kg" value={Weight} onChange={this.onChange}
                         name="Weight"/>
                    <Form.Input label={actualValue + article.map(article => article.Height)}
                        placeholder="Hauteur en cm" value={Height} onChange={this.onChange}
                        name="Height"/>            
                    <Form.Input label={actualValue + article.map(article => article.Width)}
                        placeholder="Largeur en cm" value={Width} onChange={this.onChange}
                        name="Width"/>
                    <Form.Input label={actualValue + article.map(article => article.Lenght)}
                        placeholder="Profondeur en cm" value={Lenght} onChange={this.onChange}
                        name="Lenght"/>
                    <Form.Input label={actualValue + article.map(article => article.Description)}
                        placeholder="Description" value={Description} onChange={this.onChange}
                        name="Description"/>
                    <Form.Checkbox label={`Page d'accueil : ${article.map(article => article.isOnTop)}`}
                        name="isOnTop" value={isOnTop} onChange={this.onCheckboxChange}/>                        
                    <Button type="submit" 
                                color="yellow" 
                                content="Modifier" 
                                icon="pencil" 
                                labelPosition="right"
                                floated="right"
                                />
                    {error && error.message}
                </Form>
            </Container>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
        </div>
    );
  }
}

  const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

  export default withRouter(withFirebase(withAuthorization(condition)(UpdateArticle)));