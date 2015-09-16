module.exports = function ( grunt ) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['app/js/lazyloader.js'],
            options: {
                globals: {
                    console: true
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - <%= pkg.version %> - Email: hiwangchi@gmail.com - https://github.com/wangchi/lazyLoad */'
            },
            js: {
                src: 'app/js/lazyloader.js',
                dest: 'app/js/lazyloader.min.js'
            }
        },

        copy: {
            lazyLoadjs: {
                expand: true,
                src: ['app/js/lazyloader.js', 'app/js/lazyloader.min.js'],
                dest: 'dist/',
                flatten: 'true'
            }
        },

        watch: {
            scripts: {
                files: ['app/js/lazyloader.js'],
                tasks: 'default'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['jshint', 'uglify', 'copy', 'watch']);
};