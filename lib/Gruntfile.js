module.exports = function (grunt) {
    grunt.initConfig({
      browserify: {
        js: {
          src: ['../js/main.js'],
          dest: '../dist/app.js'
        },
        options: {
          browserifyOptions: {
            paths: ["./node_modules"]
          }
        }
      },
      jshint: {
        options: {
          predef: ["document", "console", "Chart"],
          esnext: true,
          globalstrict: true,
          globals: {},
          browserify: true
        },
        files: ['../js/**/*.js']
      },
      sass: {
        dist: {
          files: {
            '../dist/css/main.css': '../scss/styles.scss'
          }
        }
      },
      watch: { //automatically watch for changes
        javascripts: {
          files: ['../js/**/*.js'],
          tasks: ['jshint', 'browserify']
        },
        sass: {
          files: ['../scss/**/*.scss'],
          tasks: ['sass']
        },
  
        browserify: {
          files: ['../js/**/*.js'],
          tasks: ['browserify']
        }
  
      }
    });
  
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
  };
  