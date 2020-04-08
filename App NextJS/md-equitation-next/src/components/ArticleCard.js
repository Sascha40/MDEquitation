import React from 'react'
import {Card, Icon, Image, Rating, Button, Label} from 'semantic-ui-react'

const ArticleCard = () => (
    <Card raised>
        <Image as={'a'} src='https://picsum.photos/300/300' wrapped rounded ui={false}/>

        <Card.Content>
            <Card.Header>Article Name Article</Card.Header>
            <Card.Meta>Marque</Card.Meta>
            <Card.Description>
                <div>
                    <Label size={"tiny"} circular content={"En stock"}/>
                    <h2 style={{float:"right", color:"rgb(143, 94, 58)", margin:"0"}}>210€99</h2>
                </div>
                <h5 style={{float:"right",margin: "0"}}><del>250€99</del></h5>
            </Card.Description>
            <div className={"mt-2"}>
                <Rating defaultRating={3} maxRating={5} disabled style={{float:"left", marginTop:"15px", marginBottom:"5px" }}/>
                <Button animated='vertical' floated={"right"} style={{minWidth: "70px"}} className={"btn-shop"}>
                    <Button.Content hidden>Au panier </Button.Content>
                    <Button.Content visible>
                        <Icon inverted name='add to cart' />
                    </Button.Content>
                </Button>
            </div>
        </Card.Content>

    </Card>
)

export default ArticleCard;