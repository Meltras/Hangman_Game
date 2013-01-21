require.config({

    // this file is loaded first (home.js)
    deps: ['index'],

    // this defines in which directory we work
    baseUrl: "js",

    // this set ups dependencies for underscore and backbone
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            exports: "Backbone",
            deps: ["underscore", "jquery"]
        }
    },

    // here we define shortcuts for our paths
    paths: {
        "text": "lib/text",
        "jquery": "lib/jquery",
        "underscore": "lib/underscore",
        "backbone": "lib/backbone"
    }

});