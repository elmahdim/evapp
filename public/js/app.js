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
 
(function () {
    'use strict';

    angular
        .module('evapp.controllers')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$http'];

    function MainController($scope, $http) {
        $scope.events = [];

        $scope.initialize = function () {
            $http.get('/event_list').then(function (response) {
                $scope.events = response.data;
            });
        }
        $scope.initialize();
    }
})(); 
(function() {
    'use strict';

    angular
        .module('evapp.routes')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : "partials/main",
                controller  : 'MainController',
                controllerAs: 'main'
            })
            .otherwise({
              redirectTo: '/'
            });
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix = '!';
    }
})();
 
/**
 * Created by Mahmoud on 01.12.2015.
 */
(function (angular) {
    'use strict';
    /*
     * Google Map Directive Angularjs
     * -----------
     * @restrict  'E' = element, 'A' = attribute
     * @usage     <google-map id="gmap" zipcode="{{obj.zipcode}}"></google-map>
     * @version   1.0
     * @author    @ElmahdiMahmoud
     * @authorUrl http://elmahdim.com
     * @api       https://maps.googleapis.com/maps/api/js
     */

    angular
        .module('evapp.directives')
        .directive('googleMap', googleMap);

    function googleMap(){
        var directive = {
            restrict : 'EA',
            replace  : true,
            template : '<div />',
            scope: {
                zipcode : '@'
            },
            link: gMapLinkFun
        };
        return directive;

        function gMapLinkFun(scope, element, attrs) {

            var geocoder, map;

            function initMap() {
                  geocoder = new google.maps.Geocoder();

                var latlng = new google.maps.LatLng(-34.397, 150.644);

                var  mapOptions = {
                        zoom: 10,
                        zoomControl: false,
                        scrollwheel: false,
                        scaleControl: true,
                        mapTypeControl: false,
                        disableDefaultUI: true,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);
            }

            function codeAddress(address){
                initMap();
                geocoder.geocode({
                    'address': address
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        map.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location
                        });
                    } else {
                        console.log('Geocode was not successful for the following reason: ' + status);
                    }
                });
            }
            attrs.$observe('zipcode', function(value) {
                if (value) {
                    codeAddress(value);
                }
            });
        }

    };
})(window.angular); 
/**
 * Created by Mahmoud on 01.12.2015.
 */
 
/**
 * Created by Mahmoud on 01.12.2015.
 */
