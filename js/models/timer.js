App.Timer = Ember.Object.extend({
  running: false,
  time: 0,

  start: function() {
    if (!this.get('running')) {
      setInterval(function() {
        var time = App.Timer.get('time')
        App.Timer.set('time', time + 1)
      }, 1000)

      this.set('running', true)
    }
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
      },
      {
        name: 'orbit',
        figure: addCommas(time * RATE_OF_EARTHS_ORBIT),
        description: 'kilometers the Earth has orbited around the Sun'
      },
      {
        name: 'tweets',
        figure: addCommas(time * 3) + "K",
        description: 'tweets have been posted, why not post another'
      }
    ]
  }.property('time')
}).create()