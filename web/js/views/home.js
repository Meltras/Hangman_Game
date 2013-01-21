define(['jquery', 'underscore', 'backbone', 'text!templates/home.html'], function($, _, Backbone, Template) {

    var HomeView = Backbone.View.extend({

        tagName: "div",

        // define class attributes
        className: "unstlyed",

        template: Template,

        // this is called when we create an instance of this object
        initialize: function() {
            //this.collection.on('reset', this.render, this);
        },

        // render generates the view's state as html string
        // it return this (so the object it self) by accessing
        // this.el or view.el we get the html string
        render:function () {
            this.$el.empty();
            this.$el.append(this.template);
            
            return this;
		},

       
    });

    return HomeView;

});

