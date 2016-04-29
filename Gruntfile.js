'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
    eslint: {
      target: ['lib/**/*.js']
    },
    watch: {
      files: ['lib/**/*.js'],
      tasks: ['eslint']
    }
	});
	
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};
