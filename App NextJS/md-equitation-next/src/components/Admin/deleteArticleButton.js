import React, { Component } from 'react'
import { withFirebase } from '../../firebase'



class deleteArticleButton extends Component {
    render() {
        return (
            <div>
                <Button circular compact color="orange" icon='trash'/>
            </div>
        )
    }
}







export default withFirebase(deleteArticleButton);