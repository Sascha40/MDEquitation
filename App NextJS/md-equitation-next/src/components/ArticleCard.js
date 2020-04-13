import React, { Children } from 'react'
import {Card, Icon, Image, Rating, Button, Label} from 'semantic-ui-react'
import Link from 'next/link';

export const ArticleCard = props => {
    return(
        <Link href="/article/[id]" as={`/article/${props.LinkName}`}>
            <Card as='a' raised style={{maxWidth: "260px"}}>
                <Image src={props.image} size="medium" style={{minHeight: "260px", maxHeight: "260px"}} wrapped ui={false}/>

                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.brand}</Card.Meta>
                    <Card.Description>
                            <Label size={"tiny"} circular content={"En stock"}/>
                            <h2 style={{float:"right", color:"rgb(143, 94, 58)", margin:"0"}}>{props.price}</h2>
                        <h5 style={{float:"right",margin: "0"}}><del>{props.crossedprice}</del></h5>
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
        </Link>
        )
}