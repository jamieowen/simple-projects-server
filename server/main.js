import { Meteor } from 'meteor';

//import '../imports/startup/server';

Meteor.startup(() => {

    // code to run on server at startup

    console.log( 'Hello Server' );
    console.log( __dirname );
    console.log( process.cwd() );
    console.log( Meteor.settings.git_checkout_folder );

});
