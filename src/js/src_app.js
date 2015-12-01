(function() {
    'use strict';

    angular.module('evapp.controllers', []);
    angular.module('evapp.routes', []);
    angular.module('evapp.directives', []);

    var dependencies = [
        'ngRoute',
        'ngResource',
        'evapp.controllers',
        'evapp.directives',
        'evapp.routes'
    ];

    angular.module('evapp', dependencies);
})();
