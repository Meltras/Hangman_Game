require(['jquery', 'underscore', 'backbone', 'router'], function($, _, Backbone, Router) {

    // create instance of router
    var router = new Router();

    // you need to call this after instancing
    // the router so that backbone keeps track
    // of url changes
    Backbone.history.start();

});