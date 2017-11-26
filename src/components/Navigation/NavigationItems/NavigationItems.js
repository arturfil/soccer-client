import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/yourteam">Your Team</NavigationItem>
    </ul>
);

export default navigationItems;