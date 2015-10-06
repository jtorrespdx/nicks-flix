var flix = angular.module('flix', ['ui.router']);

flix.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:'',
    views{
      'header': { templateUrl: 'partials/header.html' },
      'body': {
        templateUrl: 'partials/home.html',
      }
    }
  })
})
