import { Meteor } from 'meteor/meteor';
import renderRoutes from '../imports/startup/client/renderRoutes';

Meteor.startup( ()=>{

    const container = document.getElementById( 'app-container' );
    renderRoutes( container );

} )
