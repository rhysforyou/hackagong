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
        name: 'births',
        figure: addCommas(time * RATE_OF_BIRTH),
        description: "people have been born"
      },
      {
        name: 'deaths',
        figure: addCommas(time * RATE_OF_DEATH),
        description: "people have died"
      },
      {
        name: 'net-change',
        figure: addCommas(time * (RATE_OF_BIRTH - RATE_OF_DEATH)),
        description: "increase in world population"
      }
    ]
  }.property('time')
}).create()