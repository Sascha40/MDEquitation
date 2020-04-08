import React from "react";
import { Router } from "next/router";
import { auth } from "../firebase";
import { Dimmer, Loader } from 'semantic-ui-react'



export const withAuth = (C) => {
    return class AuthComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING',
            }
        }

        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                console.log(authUser);
                if (authUser) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                } else {
                    Router.push('/')
                }
            });
        }
        renderContent() {
            const { status } = this.state;

            if (status === 'LOADING') {
                return (<div>
                         <Dimmer active inverted>
                            <Loader size='large'>Chargement</Loader>
                         </Dimmer>
                        </div>)
            } else if (status === 'SIGNED_IN') {
                return <C {...this.props } />
            }
        }

        render() {
            return (
                <React.Fragment>
                    {this.renderContent()}
                </React.Fragment>
            );
        }
    }
}
