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
  id: 'result-list',
  elementId: 'resultList',
  itemViewClass: Ember.View.extend({
    templateName: 'result',
    classNameBindings: ['content.name'],
    classNames: ['result'],
    tagName: 'article'
  })
})

App.AgeTextField = Ember.TextField.extend({
  attributeBindings: ['autofocus'],
  autofocus: 'autofocus'
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