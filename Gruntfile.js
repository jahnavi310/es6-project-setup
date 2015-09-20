module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", {
                     loose: "all"
                  }]
               ]
            },
            files: {
               // if the source file has an extension of es6 then
               // we change the name of the source file accordingly.
               // The result file's extension is always .js
               "./modules/dist/main.js": ["./modules/js/main.js"]
            }
         }
      },
      jshint: {
         all: ['Gruntfile.js']
      },
      uglify: {
         build: {
            src: './modules/dist/main.js',
            dest: './modules/dist/main.min.js'
         }
      },
      watch: {
         scripts: {
            files: ["./modules/js/*.js"],
            tasks: ["browserify"]
         }
      }
   });

   // Load the plugin that provides the "browserify" task.
   grunt.loadNpmTasks("grunt-browserify");

   // Load the plugin that provides the "watch" task.
   grunt.loadNpmTasks("grunt-contrib-watch");

   // Load the plugin that provides the "jshint" task.
   grunt.loadNpmTasks('grunt-contrib-jshint');

   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.registerTask("build", ["watch"]);
   grunt.registerTask("default", ["uglify"]);
   grunt.registerTask("build", ["browserify"]);
};
