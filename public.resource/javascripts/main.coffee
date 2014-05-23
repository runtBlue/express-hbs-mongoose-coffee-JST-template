App =
	Model: {}
	Collections: {}
	Views: {}
	App: {}


App.App = Backbone.View.extend
	el: '#app'
	template: JST['layout']
	initialize: () ->
		@$el.html @template()
		@searchBar = new App.Views.SearchBar
			el: @$el.find '#header'
		@history = new App.Views.History
			el: @$el.find '#history_list'
		@tabs = new App.Views.Tabs
			el: @$el.find '#search_results'
		@footer = new App.Views.Footer
			el: @$el.find '#footer'

App.Views.SearchBar = Backbone.View.extend
	template: JST['search-bar']
	initialize: () ->
		@$el.html @template()

App.Views.History = Backbone.View.extend
	template: JST['history']
	initialize: () ->
		@$el.html @template()

App.Views.Footer = Backbone.View.extend
	template: JST['footer']
	initialize: () ->
		@$el.html @template()

App.Views.Tabs = Backbone.View.extend
	template: JST['tabs']
	initialize: () ->
		@$el.html @template()
		@hotpepper = new App.Views.SearchResults
			el: @$el.find '#hotpepper_list'
			template: JST['hotpepper']

App.Views.SearchResults = Backbone.View.extend
	initialize: (options) ->
		@$el.html options.template()


new App.App()