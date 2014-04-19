module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    ui: 'bdd',
                    reporter: 'spec',
                    clearRequireCache: true
                },
                src:['./**/*Test.js']
            }
        }
    });

    // Load nodeunit task
    grunt.loadNpmTasks('grunt-mocha-test');

};
