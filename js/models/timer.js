var RATE_OF_BIRTH = 4.16
var RATE_OF_DEATH = 1.76
var SECONDS_PER_YEAR = 60 * 60 * 24 * 365.25
var HOURS_OF_SLEEP_PER_NIGHT = 7.6
var HOURS_SPENT_EATING_PER_DAY = 1.11
var HOURS_SPENT_IN_BATHROOM_PER_DAY = 0.5

App.Timer = Ember.Object.extend({
  time: 0,
  start: function() {
    setInterval(function() {
      var time = App.Timer.get('time')
      App.Timer.set('time', time + 1)
    }, 1000)
  },

  results: function() {
    var time = this.get('time')
    return [
      {
        name: 'deaths',
        figure: addCommas(time * RATE_OF_BIRTH),
        description: "people have died"
      }
    ]
  }.property('time')
}).create()