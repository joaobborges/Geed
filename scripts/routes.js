define(["backbone"], function(Backbone){

  var Router = Backbone.Router.extend({

        routes : {

            "home"      : "home",
            "*actions"  : "home"

        },

        home : function(){

          console.log("home was loaded");

        }
  });

  return Router;

});
