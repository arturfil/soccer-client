import React, { Component } from 'react';

import classes from './UserData.css';
// add firebase ingredients
// add input in UI

class UserData extends Component {

    state = {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            }
        }
    }

    render () {
        return (
            <div className={classes.UserData}>
            </div>
        )
    }
}

export default UserData;