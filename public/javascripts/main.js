(function() {
  var App;

  App = {
    Model: {},
    Collections: {},
    Views: {},
    App: {}
  };

  App.App = Backbone.View.extend({
    el: '#app',
    template: JST['layout'],
    initialize: function() {
      App.mediator = {};
      _.extend(App.mediator, Backbone.Events);
      this.$el.html(this.template());
      this.searchBar = new App.Views.SearchBar({
        el: this.$el.find('#header')
      });
      this.history = new App.Views.History({
        el: this.$el.find('#history_list'),
        searches: new App.Collections.SearchHistoryList()
      });
      this.tabs = new App.Views.Tabs({
        el: this.$el.find('#search_results')
      });
      return this.footer = new App.Views.Footer({
        el: this.$el.find('#footer')
      });
    }
  });

  App.Views.SearchBar = Backbone.View.extend({
    template: JST['search-bar'],
    events: {
      'click #btn_search': 'search'
    },
    search: function(e) {
      var $checked, query, service;
      $checked = this.$el.find('input[type=radio]:checked');
      query = $('#query').val();
      service = $checked.val();
      e.prevantDefault();
      return App.mediator.trigger('search', {
        query: query,
        service: service
      });
    },
    initialize: function() {
      return this.$el.html(this.template());
    }
  });

  App.Views.History = Backbone.View.extend({
    template: JST['history'],
    initialize: function() {
      return this.$el.html(this.template());
    }
  });

  App.Views.Footer = Backbone.View.extend({
    template: JST['footer'],
    initialize: function() {
      return this.$el.html(this.template());
    }
  });

  App.Views.Tabs = Backbone.View.extend({
    template: JST['tabs'],
    initialize: function() {
      this.$el.html(this.template());
      return this.hotpepper = new App.Views.SearchResults({
        el: this.$el.find('#hotpepper_list'),
        template: JST['hotpepper']
      });
    }
  });

  App.Views.SearchResults = Backbone.View.extend({
    initialize: function(options) {
      return this.$el.html(options.template());
    }
  });

  new App.App();

}).call(this);
