var flix = angular.module('flix', ['ui.router']);

flix.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url:'',
    views:{
      'header': { templateUrl: 'partials/header.html' },
      'home': {
        templateUrl: 'partials/home.html',
      }
    }
  });

  $stateProvider.state('reviews', {
    url: "/reviews/:id",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        // controller: "headersCtrl"
      },
      'review': {
        templateUrl: "partials/reviews.html",
        controller: "ReviewsCtrl"
      },
      'review--right': {
        templateUrl: "partials/review-main.html",
        controller: "ReviewsCtrl"
      }
    }
  });
});
