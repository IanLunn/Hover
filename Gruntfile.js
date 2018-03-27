module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      version: {
        json: {
          src: ['bower.json']
        },

        css: {
          options: {
            prefix: 'Version[:=]\\s*'
          },
          src: ['css/hover.css', 'scss/hover.scss', 'less/hover.less', 'styl/hover.styl']
        }

      },

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

      less: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'css/hover.css': 'less/hover.less'
          }
        }
      },

      stylus: {
        dist: {
          options: {
            compress: false
          },
          files: {
            'css/hover.css': 'styl/hover.styl'
          }
        }
      },

      cssmin: {
        dist: {
          options: {
            keepSpecialComments: '1'
          },
          files: {
            'css/hover-min.css': ['css/hover.css']
          }
        }
      },


      watch: {
        options: {
          livereload: true,
        },

        reload: {
          files: ['*.html', 'css/*.css'],
          options: {
            spawn: false
          }
        },

        scss: {
          files: ['scss/**/*.scss'],
          tasks: ['sass', 'cssmin'],
          options: {
            spawn: false
          }
        },

        less: {
          files: ['less/**/*.less'],
          tasks: ['less', 'cssmin'],
          options: {
            spawn: false
          }
        },

        stylus: {
          files: ['styl/**/*.styl'],
          tasks: ['stylus', 'cssmin'],
          options: {
            spawn: false
          }
        },

        version: {
          files: ['package.json'],
          tasks: ['version'],
          options: {
            spawn: false
          }
        }
      },

      connect: {
        server: {
          options: {
            livereload: true,
            hostname: '0.0.0.0',
            port: 8000,
            base: './'
          }
        }
      },

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['connect', 'watch']);
};
