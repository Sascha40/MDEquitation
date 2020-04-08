import React from "react";
import {Modal, Header, Button, Icon} from "semantic-ui-react";
import Link from 'next/link'


class FormIsValidModal extends React.Component{
    constructor(props){
        super(props);
    }

    email = this.props.userEmail
    render(){
    return (
        <Modal
            open={this.props.isOpen}
            onClose={this.props.onClose}
            size='small'
            closeIcon
            >
                <Header icon='checkmark' color="green" content='Bienvenue chez MDEquitation !' />
                <Modal.Content>
                    <p style={{fontSize: '1.1rem', textAlign: 'center'}}>
                    Un email à été envoyé à : <span style={{margin: '0', fontWeight: '700'}}>{this.email}</span> <br/>                    
                    Alors checkez votre boite mail <Icon name="send" color="grey"/><br/>
                    Valider votre addresse mail sur le lien que nous vous avons envoyé pour finaliser votre inscription.
                    </p>
                </Modal.Content>
                <Modal.Actions>

                    <Link href="/">
                        <Button color='brown'>
                        Aller à la page d'accueil
                        </Button>
                    </Link>
                </Modal.Actions>
        </Modal>
          )
    }
}


  export default FormIsValidModal;