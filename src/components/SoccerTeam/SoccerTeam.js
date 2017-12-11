import React, { Component } from 'react';

class SoccerTeam extends Component {
    render () {
        return (
            <img scr={this.props.src} />
        )
    }
}

export default SoccerTeam;