//var path = 'app/webroot/';

module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
        	combine: {
	        	files: {
		        	'css/main.min.css': ['css/main.css', 'css/mobile.css']
	        	}
        	}
        }/*
,
        uglify: {
		    build: {
		        files: {
		            'js/main.min.js': ['js/plugins/picoModal.js', 'js/underTheElectricSky/app.js'],             
		        }
		    }
		},
		watch: {
			scripts: {
				files: ['js/underTheElectricSky.js', 'css/main.css', 'css/mobile.css'],
				tasks: ['uglify', 'cssmin'],
				options: {
				  spawn: false
				}
			}
		}
*/
    });

    grunt.registerTask('default', []);

};