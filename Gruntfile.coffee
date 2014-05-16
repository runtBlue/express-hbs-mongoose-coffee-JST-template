module.exports = (grunt) ->
	grunt.initConfig
		watch:
			default:
				files: ['resources/**/**/*.coffee'
					'resources/public/templates/*.hbs']
				tasks: ['coffee', 'handlebars']
		coffee:
			compile:
				files: [
					expand: true
					cwd: 'resources/'
					src: ['**/**/*.coffee']
					dest: ''
					ext: '.js'
				]
		handlebars:
			compile:
				namespace: 'JST'
				files:
					'public/javascripts/template.js': ['resources/public/templates/**/*.hbs']
	pkg = grunt.file.readJSON 'package.json'
	for t of pkg.devDependencies
		if t.substring(0, 6) is 'grunt-'
			grunt.loadNpmTasks t
	grunt.registerTask 'default', ['coffee', 'handlebars', 'watch:default']
	grunt.registerTask 'build', ['coffee', 'watch:default']
	return
