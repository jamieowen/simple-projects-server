import React from 'react';

// Material UI Components

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

// Icons
import IconDehaze from 'material-ui/svg-icons/image/dehaze';

// Custom Components


const style = {

    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px'
    },

    appBar: {
        backgroundColor: '#ffffff'
    }

}

export default class ApplicationView extends React.Component{

    constructor( props ){

        super( props );

        this.state = {
            open: false
        }

    }

    render(){

        return (
            <div id="app-view-container" style={style.container}>

                <Drawer
                      docked={false}
                      width={200}
                      open={this.state.open}
                    >
                    <MenuItem onTouchTap={ ()=>this.onDrawer() }>Temp</MenuItem>
                </Drawer>


                <div id="subview-container" style={style.container}>
                { this.props.children }
                </div>

                <AppBar style={style.appBar} iconElementLeft={
                    <IconButton tooltip="Menu" onTouchTap={ ()=>this.onDrawer() }>
                        <IconDehaze color="#000000"/>
                    </IconButton>
                }>
                </AppBar>

            </div>
        )

    }

    onDrawer(){

        this.setState( {
            open: !this.state.open
        });

    }

}
