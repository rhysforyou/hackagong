var RATE_OF_BIRTH = 4.16
var RATE_OF_DEATH = 1.76
var SECONDS_PER_YEAR = 60 * 60 * 24 * 365

App.genders = ['guy', 'girl']

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