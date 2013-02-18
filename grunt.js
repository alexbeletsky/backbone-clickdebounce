/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-rigger');
  grunt.loadNpmTasks('grunt-mocha');
  
  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.0.1',
      source: 'backbone.clickdebounce.js',
      sourceMin: 'backbone.clickdebounce.min.js',
      banner: '// Click Debouncer for Backbone.Views, v<%= meta.version %>\n' +
        '// Copyright (c)<%= grunt.template.today("yyyy") %> alexander.beletsky@gmail.com\n' + 
        '// Distributed under MIT license\n' + 
        '// http://github.com/alexander.beletsky/backbone.clickdebounce'
    },

    lint: {
      files: ['src/<source:mata.source>']
    },

    mocha: {
      all: ['test/index.html']
    },

    rig: {
      build: {
        src: ['<banner:meta.banner>', 'src/backbone.clickdebounce.js'],
        dest: 'lib/backbone.clickdebounce.js'
      },
      amd: {
        src: ['<banner:meta.banner>', 'src/amd.js'],
        dest: 'lib/amd/backbone.clickdebounce.js'
      }
    },

    min: {
      standard: {
        src: ['<banner:meta.banner>', '<config:rig.build.dest>'],
        dest: 'lib/backbone.clickdebounce.min.js'
      },
      amd: {
        src: ['<banner:meta.banner>', '<config:rig.amd.dest>'],
        dest: 'lib/amd/backbone.clickdebounce.min.js'
      },
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        Backbone: true,
        _: true,
        Marionette: true,
        $: true,
        slice: true
      }
    },

    uglify: {}

  });

  // Default task.
  grunt.registerTask('default', 'lint mocha rig min');

};
