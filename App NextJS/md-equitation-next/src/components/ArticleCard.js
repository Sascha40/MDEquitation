import React from 'react'
import {Card, Icon, Image, Rating, Button, Label} from 'semantic-ui-react'

class ArticleCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
        };
    }

    render() {
        return (
        <Card as='a' href={this.props.link} raised style={{maxWidth: "260px"}}>
            <Image src={this.props.image} size="medium" style={{minHeight: "260px", maxHeight: "260px"}} wrapped ui={false}/>

            <Card.Content>
                <Card.Header>{this.props.name}</Card.Header>
                <Card.Meta>{this.props.brand}</Card.Meta>
                <Card.Description>
                    <div>
                        <Label size={"tiny"} circular content={"En stock"}/>
                        <h2 style={{float:"right", color:"rgb(143, 94, 58)", margin:"0"}}>{this.props.price}</h2>
                    </div>
                    <h5 style={{float:"right",margin: "0"}}><del>{this.props.crossedprice}</del></h5>
                </Card.Description>
                <div className={"mt-2"}>
                    <Rating defaultRating={3} maxRating={5} disabled style={{float:"left", marginTop:"15px", marginBottom:"5px" }}/>
                    <Button circular animated='vertical' floated={"right"} style={{minWidth: "75px"}} className={"btn-shop"}>
                        <Button.Content hidden>Au panier </Button.Content>
                        <Button.Content visible>
                            <Icon inverted name='add to cart' />
                        </Button.Content>
                    </Button>
                </div>
            </Card.Content>

        </Card>

        )
    }
}

export default ArticleCard;