import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React from 'react';
import "./HomeCarousselStyles.css"
import {Image, Responsive} from "semantic-ui-react";
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);


const HomeCaroussel = () => (
    <Responsive minWidth={1100}>
    <AutoplaySlider className={"aws-btn"}
                   play={true}
                   cancelOnInteraction={false} // should stop playing on user interaction
                   interval={6000}>
        <div><Image src={"https://picsum.photos/id/1/1200/600"}/></div>
        <div style={{backgroundColor:"lightgray"}}><Image src={"https://picsum.photos/id/2/1200/600"}/></div>
        <div style={{backgroundColor:"lightgray"}}><Image src={"https://picsum.photos/id/3/1200/600"}/></div>
        <div style={{backgroundColor:"lightgray"}}><Image src={"https://picsum.photos/id/4/1200/600"}/></div>
    </AutoplaySlider>
    </Responsive>
);

export default HomeCaroussel;