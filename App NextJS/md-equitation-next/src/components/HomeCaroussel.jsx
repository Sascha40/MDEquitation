import AwesomeSlider from 'react-awesome-slider';
import React from 'react';
import { Image } from 'semantic-ui-react';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Media, MediaContextProvider } from '../media/media';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const HomeCaroussel = () => (
  <MediaContextProvider>
    <Media greaterThanOrEqual="xl">
      <AutoplaySlider
        className={'aws-btn'}
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div>
          <Image src={'/chevaux.png'} />
        </div>
        <div style={{ backgroundColor: 'lightgray' }}>
          <Image src={'/chevaux2.png'} />
        </div>
      </AutoplaySlider>
    </Media>
  </MediaContextProvider>
);

export default HomeCaroussel;
