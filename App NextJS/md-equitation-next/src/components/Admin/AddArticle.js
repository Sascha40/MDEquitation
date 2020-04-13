import {    
    Icon, 
    TextArea, 
    Form, 
    Checkbox,
    Button, 
    Modal, 
    Progress
    }
    from 'semantic-ui-react';

import {withFirebase} from "../../firebase";
import React, { Component } from 'react';


const INITIAL_STATE = {
                    image1: null,
                    image2: null,
                    image3: null,
                    image4: null,
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
                    url: '',
                    urlImage2: '',
                    urlImage3: '',
                    urlImage4: '',
                    isOnTop: false,
                    error: false,
                    progress: 0
                }
class AddArticle extends Component {
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    
    }

    onImage1Change = e => {
        if(e.target.files[0]){
            const image1 = e.target.files[0];
            this.setState(() => ({image1}));
        }
    } 

    onImage2Change = e => {
        if(e.target.files[0]){
            const image2 = e.target.files[0];
            this.setState(() => ({image2}));
        }
    } 

    onImage3Change = e => {
        if(e.target.files[0]){
            const image3 = e.target.files[0];
            this.setState(() => ({image3}));
        }
    } 

    onImage4Change = e => {
        if(e.target.files[0]){
            const image4 = e.target.files[0];
            this.setState(() => ({image4}));
        }
    } 

    onChange = (event) => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value })
    }
    
    onCheckboxChange = () => {
        this.setState(({ isOnTop }) => ({ isOnTop: !isOnTop }))
    }


    addData = () => {
        const { 
            image1,
            image2,
            image3,
            image4,
            name,
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
            url,
            urlImage2,
            urlImage3,
            urlImage4,
            isOnTop,
        } = this.state;

        this.props.firebase 
        .articles()
            .add({
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
                url: url,
                isOnTop: isOnTop,
                addDate: Date.now()
            })
            .catch(error => {
                this.setState({error: error.message})
            });
    }
    

    onSubmit(event) {
        const { image1,
                image2,
                image3,
                image4,
                name,
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
                url,
                urlImage2,
                urlImage3,
                urlImage4,
                isOnTop,
            } = this.state;

            const uploadTask = this.props.firebase.storage.ref(`images/${image1.name}`).put(image1);

            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({progress})
            },
            (error) => {
                console.log(error);
            },
            () => {
                this.props.firebase.storageRef.child(`images/${image1.name}`).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url});
                    this.addData()
                })
                .then(() => this.setState({...INITIAL_STATE}))
            },
            ); 

        

            event.preventDefault()
    }
            

    render() {
        return (
            <div>
                
                <Modal open={this.props.open}
                        onOpen={this.props.onOpen}
                        onClose={this.props.onClose}
                        closeIcon

                        >
                    <Modal.Header>Ajouter un article</Modal.Header>
                    <Modal.Content scrolling>
                    <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Input required fluid placeholder='Nom' value={this.state.name}
                                    name="name" onChange={this.onChange}/>
                        <Form.Input required fluid placeholder='Marque' value={this.state.brand}
                                    name="brand" onChange={this.onChange}/>
                        <Form.Input required fluid placeholder='Référence' value={this.state.reference}
                                    name="reference" onChange={this.onChange}/>
                        <Form.Input required fluid placeholder='Prix TTC (nombres)' value={this.state.price}
                                    name="price" onChange={this.onChange}/>
                        <Form.Input required fluid placeholder='Prix Barré TTC (nombres)' value={this.state.crossedprice}
                                    name="crossedprice" onChange={this.onChange}/>
                        <Form.Input required fluid placeholder='Stock (nombres)' value={this.state.stock}
                                    name="stock" onChange={this.onChange}/>
                        <Form.Input fluid placeholder='Poids en kg' value={this.state.weight}
                                    name="weight" onChange={this.onChange}/>
                        <Form.Input fluid placeholder='Hauteur en cm' value={this.state.height}
                                    name="height" onChange={this.onChange}/>
                        <Form.Input fluid placeholder='Largeur en cm' value={this.state.width}
                                    name="width" onChange={this.onChange}/>
                        <Form.Input fluid placeholder='Profondeur en cm' value={this.state.lenght}
                                    name="lenght" onChange={this.onChange}/>
                        <Form.Field required control={TextArea} placeholder='Description du produit' 
                                    value={this.state.description} name="description" onChange={this.onChange}/>
                        <Form.Field 
                            control={Checkbox}
                            checked={this.state.isOnTop}
                            label={<label>Mettre en page d'accueil</label>}
                            name='isTop'
                            onChange = {this.onCheckboxChange}
                        />
                        <Form.Input
                            size="small"
                            type="file"
                            label="Image 1 "
                            accept="image/png, image/jpeg"
                            onChange={this.onImage1Change.bind(this)}
                        />
                        <Form.Input
                            size="small"
                            type="file"
                            label="Image 2"
                            accept="image/png, image/jpeg"
                            onChange={this.onImage2Change.bind(this)}
                        />
                        <Form.Input
                            size="small"
                            type="file"
                            label="Image 3"
                            accept="image/png, image/jpeg"
                            onChange={this.onImage3Change.bind(this)}
                        />
                        <Form.Input
                            size="small"
                            type="file"
                            label="Image 4"
                            accept="image/png, image/jpeg"
                            onChange={this.onImage4Change.bind(this)}
                        />   
                        <Progress percent={this.state.progress} indicating progress/>

                        {this.state.error && error.message}         
                        <Button type="submit" 
                                floated="right" 
                                primary 
                                content="Ajouter" 
                                icon="plus" 
                                labelPosition="right"/>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
        )
    }
}

export default withFirebase(AddArticle);