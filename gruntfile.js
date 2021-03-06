module.exports = function(grunt) {
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: './vendor',
					layout: 'byComponent',
					install: true,
					verbose: true,
					cleanBowerDir: false
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.registerTask('default', ['bower']); 
};