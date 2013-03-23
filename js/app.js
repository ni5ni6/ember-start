App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
    firstName: "Trek",
    lastName: "Glowacki"
});

App.IndexRoute = Ember.Route.extend({
    setupController: function (controller) {
        controller.set('title', "My App Index");
    }
});