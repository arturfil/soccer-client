import React from 'react';

import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
//Missing Backdrop 
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

   return (
       <Aux>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
       </Aux>
   )
};

export default sideDrawer;