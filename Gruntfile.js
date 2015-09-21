module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                banner: '/*\n'
                + 'Name: <%= pkg.name %>  - Version: <%= pkg.version %> \n'
                + 'Author: <%= pkg.author %> \n'
                + 'Last Updated: <%= grunt.template.today(new Date()) %>\n'
                + '*/'
                + '\n' + '\n',
                mangle: false
            },
            wizard_target:{
                files:{
                    'build/talented-ui.wizard.min.js':[
                        'src/talented-ui.wizard.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', ['uglify']);
};
