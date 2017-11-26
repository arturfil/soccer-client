import React, { Component } from 'react'

import classes from './TeamPicker.css'

class TeamPicker extends Component {
    render () {
        return (
            <div>
                <h2> Choose Your Favorite Team </h2>
                <ul>
                    <li>
                        <img src="https://media.giphy.com/media/r1IMdmkhUcpzy/giphy.gif"/>
                        <h3>Real Madrid</h3>
                    </li>
                    <li>
                        <img src="https://media.giphy.com/media/T2AmoAqrjAluU/giphy.gif" />
                        <h3>Manchester United</h3>
                    </li>
                    <li>
                        <img src="https://media.giphy.com/media/kvSp97J1kBVqo/giphy.gif" />
                        <h3>Barcelona</h3>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TeamPicker;