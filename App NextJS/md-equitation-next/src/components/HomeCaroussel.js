import AwesomeSlider from 'react-awesome-slider';
import React from 'react'
import {Image} from "semantic-ui-react";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Media, MediaContextProvider } from "../helpers/media"
const AutoplaySlider = withAutoplay(AwesomeSlider);


const HomeCaroussel = () => (
<MediaContextProvider>
        <Media greaterThanOrEqual="xl">
            <AutoplaySlider className={"aws-btn"}
                           play={true}
                           cancelOnInteraction={false}
                           interval={6000}>
                <div><Image src={"https://picsum.photos/id/1/1200/600"}/></div>
                <div style={{backgroundColor:"lightgray"}}><Image src={"https://picsum.photos/id/2/1200/600"}/></div>
                <div style={{backgroundColor:"lightgray"}}><Image src={"https://picsum.photos/id/3/1200/600"}/></div>
                <div style={{backgroundColor:"lightgray"}}><Image src={"https://picsum.photos/id/4/1200/600"}/></div>
            </AutoplaySlider>
       </Media>
    </MediaContextProvider>
);

export default HomeCaroussel;