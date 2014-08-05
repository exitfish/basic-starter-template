module.exports = function(grunt) {
  
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
//    cssc: {
//        build: {
//            options: {
//                consolidateViaDeclarations: true,
//                consolidateViaSelectors:    true,
//                consolidateMediaQueries:    true
//            },
//            files: {
//                'assets/css/style.css': 'assets/css/style.min.css'
//            }
//        }
//    },
    cssmin: {
        build: {
            src: 'assets/css/style.css',
            dest:'assets/css/style.min.css'
        }
    },
    less: {
        build: {
            files: {
                'assets/css/style.css': 'assets/less/style.less'
            }
        }
    },
        
    watch: {
        html: {
          files: ['index.html'],
          tasks: ['htmlhint'],
          options: {
                    livereload: true,
                  }
        },
        js: {
          files: ['assets/js/app.js'],
          tasks: ['uglify'],
          options: {
                    livereload: true,
                  }
        },
        css: {
            files: ['assets/less/**/*.less'],
            tasks: ['buildcss'],
            options: {
                      livereload: true,
                    }
        }
    },
    
    htmlhint: {
                build: {
                    options: {
                        'tag-pair': true,
    // Force tags to have a closing pair
                        'tagname-lowercase': true,
    // Force tags to be lowercase
                        'attr-lowercase': true,
    // Force attribute names to be lowercase e.g. <div id="header"> is invalid
                        'attr-value-double-quotes': true,
    // Force attributes to have double quotes rather than single
                        'doctype-first': true,
    // Force the DOCTYPE declaration to come first in the document
                        'spec-char-escape': true,
    // Force special characters to be escaped
                        'id-unique': true,
    // Prevent using the same ID multiple times in a document
                        'head-script-disabled': true,
    // Prevent script tags being loaded in the  for performance reasons
                        'style-disabled': true
    // Prevent style tags. CSS should be loaded through 
                    },
                    src: ['index.html']
                }
            },
            
      uglify: {
                  build: {
                      files: {
                          'assets/js/app.min.js': ['assets/js/app.js']
                      }
                  }
              }
      
  });
  
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('buildcss',  ['less', 'cssmin']);
  
};