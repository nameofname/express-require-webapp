requirejs.config({
    // Load up everything in lib without the leading string "libraries"
    baseUrl : 'js/libraries',

    // Register the rest of the paths to public JS directories: They are all 1 directory up from libraries
    paths : {
        collections : '../collections',
        models : '../models',
        pages : '../pages',
        views : '../views'
    }
});

requirejs('main', ['jquery', 'backbone', 'underscore'], function($, _, Backbone){
    alert('main module loaded');
});

