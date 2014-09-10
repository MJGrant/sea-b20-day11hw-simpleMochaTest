module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');

// Project configuration.
  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: { src: 'tests/mocha/*.js' }
    }
  });

  grunt.registerTask('test', ['simplemocha']);
};
