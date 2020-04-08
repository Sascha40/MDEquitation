import {Menu, Responsive, Sidebar} from "semantic-ui-react";
import {MediaContextProvider, Media} from "../media/media";
import PropTypes from "prop-types";
import React from "react";



const LeftSideBar = ({ animation, direction, visible }) => (

    <MediaContextProvider>
        <Media greaterThanOrEqual="lg">
            <Sidebar
                animation={animation}
                direction={direction}
                icon='labeled'
                vertical
                visible={visible}
                style={{width:"260px", paddingTop:"100px", border: "none", backgroundColor:"white"}}
            >
                <Menu vertical secondary style={{width: "100%", padding:"20px"}}>
                    <Menu.Item>
                        <Menu.Header>Produits</Menu.Header>
                            <Menu.Item
                                name='Tous les articles' as={'a'}
                            />
                            <Menu.Item
                                name='Catégories' as={'a'}
                            />
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header>CMS Solutions</Menu.Header>

                            <Menu.Item
                                name='rails'  as={'a'}
                            />
                            <Menu.Item
                                name='python' as={'a'}
                            />
                            <Menu.Item
                                name='php' as={'a'}
                            />
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header>Hosting</Menu.Header>

                            <Menu.Item
                                name='shared' as={'a'}
                            />
                            <Menu.Item
                                name='dedicated' as={'a'}
                            />
                    </Menu.Item>

                </Menu>
            </Sidebar>
        </Media>
    </MediaContextProvider>
)

LeftSideBar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
}

export default LeftSideBar;