module.exports = function(grunt) {

  // configure the tasks
  grunt.initConfig({

   concat: {
    options: {
      separator: ' \n'
    },
    dist: {
      src : ['src/js/src_main.js'],
      dest: 'public/js/main.js',
      nonull: true
    },
    app: {
        src : [ 'src/js/src_app.js', 'src/js/app/*/*.js' ],
        dest: 'public/js/app.js',
        nonull: true
    }
  },

   compass: {
     dist: {
       options: {
         sassDir: 'src/scss',
         cssDir: 'public/css',
         config: 'config.rb',
         environment: 'development'
       }
     }
   },

    uglify: {
      build: {
        options: {
          mangle: false
        },
        files: {
          'public/main.js': [ 'public/**/*.js' ]
        }
      }
    },

    jade: {
      compile: {
        options: {
         client: false,
         pretty: true
        },
        files: [{
            cwd: "views",
            src: "**/*.build.jade",
            dest: "build",
            expand: true,
            ext: ".html"
        }]
      }
    },

    watch: {
      css: {
       files: ['src/scss/*.scss', 'src/scss/**/*.scss'],
       tasks: ['compass']
      },
      scripts: {
       files: ['src/js/*.js', 'src/js/**/*.js'],
       tasks: ['concat']
      },
        jade: {
            files: '**/*.jade',
            tasks: [ 'jade' ],
            options: {
                livereload: true
            }
        }
    }
  });

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // define the tasks
  grunt.registerTask( 'stylesheets', 'Compiles the stylesheets.', [ 'compass' ] );
  grunt.registerTask( 'scripts', 'Compiles the JavaScript files.', [ 'uglify', 'concat' ] );
  grunt.registerTask( 'build', 'Compiles all of the assets and copies the files to the build directory.', [ 'jade', 'compass' ] );
  grunt.registerTask( 'default',  'Watches the project for changes, automatically builds them and runs a server.',  [ 'build', 'watch' ] );
};
