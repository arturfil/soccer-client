import React, { Component } from 'react'

import classes from './TeamPicker.css'
import SoccerTeam from '../../components/SoccerTeam/SoccerTeam';
import Team from './Team/Team';

class TeamPicker extends Component {
    render () {
        return (
           <div>
               <Team name="Manchester United" />
           </div>
        )
    }
}

export default TeamPicker;