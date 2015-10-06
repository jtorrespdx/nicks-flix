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
  })
})
