angular.module("myApp", ["ngRoute"])
        .value("predictions", [{
        	id: 0,
        	name: 'Jon Snow',
          	family: 'Stark',
          	season: 1,
          	episode: 3
        }, {
        	id: 1,
          	name: 'Sansa Stark',
          	family: 'Stark',
          	season: 1,
          	episode: 3
        }, {
        	id: 2,
          	name: 'Tyrion Lannister',
          	family: 'Lannister',
          	season: 1,
          	episode: 3
        }])
        .constant("VIEWS", {
        	listView: "app/view/listView.html",
        	formView: "app/view/formView.html",
        	homeView: "app/view/homeView.html"
        }).value("filtered", 
        		false)
        .config(["$routeProvider", "VIEWS", function($routeProvider, VIEWS) {
          $routeProvider.when("/", {
            controller: "ListController",
            templateUrl: VIEWS.listView
          }).when("/detail/:id", {
            controller: "DetailController",
            templateUrl: VIEWS.formView
          }).when("/delete/:id", {
              controller: "DeleteController",
              templateUrl: VIEWS.listView
          }).when("/add", {
              controller: "AddController",
              templateUrl: VIEWS.formView
          }).when("/home", {              
              templateUrl: VIEWS.homeView
            }).otherwise({
            redirectTo: "/"
          });	
        }])