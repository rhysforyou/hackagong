var App = Ember.Application.create()

var RATE_OF_BIRTH = 4.16
var RATE_OF_DEATH = 1.76
var SECONDS_PER_YEAR = 60 * 60 * 24 * 365

App.genders = ['guy', 'girl']

function addCommas(nStr)
{
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

App.User = Ember.Object.extend({
  age: 18,
  sex: 'guy',

  birthsSinceBorn: function() {
    return addCommas(this.age * SECONDS_PER_YEAR * RATE_OF_BIRTH)
  }.property("age"),

  deathsSinceBorn: function() {
    return addCommas(this.age * SECONDS_PER_YEAR * RATE_OF_DEATH)
  }.property("age"),

  birthYear: function() {
    return 2012 - this.age
  }.property("age")
})

App.ApplicationController = Ember.Controller.extend()
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
})

App.FormController = Ember.Controller.extend()
App.FormView = Ember.View.extend({
  templateName: 'form'
})

App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',

      connectOutlets: function(router) {
        var controller = router.get('applicationController')
        var context = App.User.create()

        controller.connectOutlet('form', context)
      }
    })
  })
})

App.initialize()