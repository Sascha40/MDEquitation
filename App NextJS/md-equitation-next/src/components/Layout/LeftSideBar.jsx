import { Menu, Responsive, Sidebar, Icon } from 'semantic-ui-react';
import { MediaContextProvider, Media } from '../../media/media';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

const LeftSideBar = ({ animation, direction, visible }) => (
  <MediaContextProvider>
    <Media greaterThanOrEqual="lg">
      <Sidebar
        animation={animation}
        direction={direction}
        icon="labeled"
        visible={visible}
        style={{
          width: '260px',
          paddingTop: '100px',
          border: 'none',
          backgroundColor: 'white',
        }}
      >
        <Menu
          vertical
          secondary
          style={{ width: '100%', paddingLeft: '10px', paddingTop: '10px' }}
        >
          <Menu.Item style={{ textAlign: 'left' }}>
            <Link href="/">
              <Menu.Item as="a">
                <div style={{ fontWeight: 'bold' }}>
                  <Icon name="home" className="greenColor"/> Accueil
                </div>
              </Menu.Item>
            </Link>
            <Menu.Item as="a">
              <div style={{ fontWeight: 'bold' }}>
                <Icon name="tags" className="greenColor"/> Nos Articles
              </div>
            </Menu.Item>
            <Link href="/categories">
              <Menu.Item as="a">
                <div style={{ fontWeight: 'bold' }}>
                  <Icon name="block layout" className="greenColor" /> Nos Catégories
                </div>
              </Menu.Item>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Filtrer par :</Menu.Header>

            <Menu.Item name="Prix Croissant" as={'a'} />
            <Menu.Item name="Prix Décroissant" as={'a'} />
          </Menu.Item>
        </Menu>
      </Sidebar>
    </Media>
  </MediaContextProvider>
);

LeftSideBar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
};

export default LeftSideBar;
