var App = Ember.Application.create()

App.ApplicationController = Ember.Controller.extend()
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
})

App.FormController = Ember.Controller.extend()
App.FormView = Ember.View.extend({
  templateName: 'form'
})

App.NoContentView = Ember.View.extend({
  templateName: 'no-content'
})

App.ResultsView = Ember.CollectionView.extend({
  contentBinding: 'controller.content.results',
  tagName: 'section',
  elementId: 'resultList',
  itemViewClass: Ember.View.extend({
    templateName: 'result',
    classNameBindings: ['content.name'],
    classNames: ['result'],
    tagName: 'article'
  })
})

App.TimerResultsView = App.ResultsView.extend({
  contentBinding: 'App.Timer.results',
  elementId: 'timer-results-list'
})

App.AgeTextField = Ember.TextField.extend({
  attributeBindings: ['autofocus'],
  autofocus: 'autofocus'
})

App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',

      shareURL: Ember.Route.transitionTo('shareURL'),

      connectOutlets: function(router) {
        var controller = router.get('applicationController')
        var context = App.User.create()

        controller.connectOutlet('form', context)

        App.Timer.start()

        context.addObserver('validAge', animateRows)
      }
    }),

    shareURL: Ember.Route.extend({
      route: '/:age',

      serialize: function(router, context) {
        return {
          age: context.get("age")
        }
      },

      deserialize: function(router, urlParams) {
        return App.User.create({age: urlParams.age})
      },

      connectOutlets: function(router, context) {
        var controller = router.get('applicationController')

        controller.connectOutlet('form', context)

        App.Timer.start()

        setTimeout(function() {
          App.set('currentURL', document.URL)

          twitterURL = "http://twitter.com/share?url=&text=" + escape(document.URL)
          console.log(twitterURL)

          $('#shareButton').css('display', 'none')
          $('#sharing .shareControls').css('display', 'block')
          $('#sharing .twitterButton').attr('href', twitterURL)
        }, 1000)
      }
    })
  })
})

App.initialize()