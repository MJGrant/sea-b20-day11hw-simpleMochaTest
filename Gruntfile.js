module.exports = function(grunt) {

// Project configuration.
  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    test: {
      options: {
        debug: true
      },
      src: ['test/mocha/backbone/**/*.js'],
      }
    });

  grunt.registerTask('test', ['test']);
  grunt.registerTask('default', ['test']);
};
