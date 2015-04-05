(function(){
    var app = angular.module("Main", ['ngRoute', 'angular-carousel']);
    
    /* code enabling adding events
    
    var app = angular.module("Main", ['ngRoute', 'ngResource', 'angular-carousel']);
    
    app.factory('sharedProperties', ['$rootScope','$resource', function($rootScope, $resource) {
        var sharedProperties = {
            editing : {
                enabled : false
            },
            getEditing: function () {
                return sharedProperties.editing.enabled;
            },
            enableEditing: function() {
                sharedProperties.editing.enabled = true;
            },
            disableEditing: function() {
                sharedProperties.editing.enabled = false;
            }
        }
        return sharedProperties;
    }]);*/
    
    app.config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
            controller: "NavController",
            templateUrl: 'html/main.html'
            })
            .when('/aboutUs', {
                controller: "AboutController",
                templateUrl: 'html/about.html'
            })
            .when('/gallery',{
                controller: "GalleryController",
                templateUrl: 'html/gallery.html'
            })
            .when('/tournaments',{
                controller: "TournamentsController",
                templateUrl: 'html/tournaments.html'
            })
            .when('/practices',{
                controller: "PracticeController",
                templateUrl: 'html/practice.html'
            })
            .when('/contactUs',{
                controller: "ContactController",
                templateUrl: 'html/contact.html'
            })
            .otherwise({
                controller: "NavController",
                redirectTo: 'html/main.html'
            });

    });

    
    app.controller('NavController', ["$http","$scope","$route","$location", function($http,$scope,$route, $location) {
        
        $scope.aboutClick = function() {
            $location.path("/aboutUs");
        };
        
        $scope.tournamentClick = function() {
            $location.path("/tournaments");
        };
        
        $scope.practiceClick = function() {
            $location.path("/practices");
        };
        
        $scope.galleryClick = function() {
            $location.path("/gallery");
        };
        
        $scope.contactClick = function() {
            $location.path("/contactUs");
        };
        
        $scope.homeClick = function() {
            $location.path("/");
        };
        /* code enabling adding events
        $scope.showAuth = false;
        
        $scope.authClick = function() {
            alert("Active");
            $scope.showAuth = true;
        };
        */
    }]);
    /* code enabling adding events
    app.controller('AuthController', ["$http","$scope","$route","$location", "sharedProperties", function($http,$scope,$route, $location, sharedProperties) {
        
        var password = "password";
        $scope.showAuth = false;
        $scope.password = "";
        
        $scope.authClick = function() {
            $scope.showAuth = true;
        };
        
        $scope.authenticate = function() {
            if ($scope.password == password){
                sharedProperties.enableEditing();
                alert("Success!");
            } else {
                alert("Fail");
            }
            $scope.showAuth = false;
            $scope.password = "";
        };
        -- add sharedProperties to each controller as below
        app.controller("AboutController", ["$http", "$scope", "$route", "$location", "sharedProperties", AboutController] );
        
        -- also add to function in each file as below
        function($http,$scope,$route, $location, sharedProperties)
    }]);
    */
    app.controller("AboutController", ["$http", "$scope", "$route", "$location", AboutController] );
    
    app.controller("TournamentsController", ["$http", "$scope", "$route", "$location", TournamentsController] );
    
    app.controller("GalleryController", ["$http", "$scope", "$route", "$location", GalleryController] );
    
    app.controller("ContactController", ["$http", "$scope", "$route", "$location", ContactController] );
    
    app.controller("PracticeController", ["$http", "$scope", "$route", "$location", PracticeController] );
})();