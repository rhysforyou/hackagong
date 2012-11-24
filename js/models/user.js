var RATE_OF_BIRTH = 4.16
var RATE_OF_DEATH = 1.76
var SECONDS_PER_YEAR = 60 * 60 * 24 * 365.25
var HOURS_OF_SLEEP_PER_NIGHT = 7.6
var HOURS_SPENT_EATING_PER_DAY = 1.11
var HOURS_SPENT_IN_BATHROOM_PER_DAY = 0.5

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

  netChangeInPopSinceBorn: function() {
    var born = this.age * SECONDS_PER_YEAR * RATE_OF_BIRTH
    var dead = this.age * SECONDS_PER_YEAR * RATE_OF_DEATH

    return addCommas(born - dead)
  }.property("age"),

  birthYear: function() {
    return 2012 - this.age
  }.property("age"),

  hoursSlept: function() {
    return addCommas(this.age * 365.25 * HOURS_OF_SLEEP_PER_NIGHT)
  }.property("age"),

  hoursAte: function() {
    return addCommas(this.age * 365.25 * HOURS_SPENT_EATING_PER_DAY)
  }.property("age"),

  hoursInBathroom: function() {
    return addCommas(this.age * 365.25 * HOURS_SPENT_IN_BATHROOM_PER_DAY)
  }.property("age"),

  results: function() {
    return [
      {
        name: 'births',
        figure: this.get('birthsSinceBorn'),
        description: 'people have been born'
      },
      {
        name: 'deaths',
        figure: this.get('deathsSinceBorn'),
        description: 'people have died'
      },
      {
        name: 'net-change',
        figure: this.get('netChangeInPopSinceBorn'),
        description: "the amount the world's populaition has increased in that time"
      },
      {
        name: 'sleeping',
        figure: this.get('hoursSlept'),
        description: 'hours of your life have been spent sleeping'
      },
      {
        name: 'eating',
        figure: this.get('hoursAte'),
        description: 'hours of your life have been spent eating'
      },
      {
        name: 'bathroom',
        figure: this.get('hoursInBathroom'),
        description: 'hours of your life have been spent in the bathroom'
      }
    ]
  }.property("age")
})