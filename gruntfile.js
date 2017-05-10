'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('./grunt-mocha-test');
    grunt.loadNpmTasks('./grunt-contrib-watch');

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['mocha_testing/*.js']
            }
        },
        watch: {
            scripts: {
                files: ['mocha_testing/*.js'],
                tasks: ['mochaTest']
            }
        }
    });

    grunt.registerTask('default', 'watch');
};