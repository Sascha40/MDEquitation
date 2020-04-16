import { Menu, Responsive, Sidebar } from 'semantic-ui-react';
import { MediaContextProvider, Media } from '../../media/media';
import PropTypes from 'prop-types';
import React from 'react';

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
        <Menu vertical secondary style={{ width: '100%', padding: '20px' }}>
          <Menu.Item>
            <Menu.Header>MDEquitation</Menu.Header>
            <Menu.Item as="a">Voir les articles</Menu.Item>
            <Menu.Item as="a">Nos catégories</Menu.Item>
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
