module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              'css/hover.css': 'scss/hover.scss'
            }
          }
        },


        autoprefixer: {
          options: {
            browsers: ['last 2 version', 'ie 8', 'ie 9']
          },
          multiple_files: {
            expand: true,
            flatten: true,
            src: 'css/*.css',
            dest: 'css/'
          }
        },


        cssmin: {
          combine: {
            files: {
              'css/hover-min.css': ['css/hover.css']
            }
          }
        },


        watch: {
          options: {
            livereload: true,
          },
          css: {
            files: ['scss/**/*.scss', 'css/*.css', '*.html'],
            tasks: ['sass', 'autoprefixer', 'cssmin'],
            options: {
              spawn: false,
            }
          }
        },

        connect: {
          server: {
            options: {
              port: 8000,
              base: './'
            }
          }
        },

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['connect', 'watch']);
};