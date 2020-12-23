var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state('main', {
        url: '/',
        views: {
            '': {
                templateUrl: 'com/views/main.html',
                controller: "MainCtrl as mainCtrl"
            }
        }
    })
    .state('home', {
        url: 'home',
        parent: 'main',
        views: {
            'page@main': {
                templateUrl: 'com/views/home.html'
            }
//            'menu@background': {
//                templateUrl: 'com/views/menu.html'
//            },
//            'header@background': {
//                templateUrl: 'com/views/header.html'
//            }
        }
    })
    .state('comingSoon', {
        url: 'comingSoon',
        parent: 'main',
        views: {
            'page@main': {
                templateUrl: 'com/views/comingSoon.html'
            }
        }
    })
    .state('dataStructure', {
        url: 'dataStructure',
        parent: 'main',
        views: {
            'page@main': {
                templateUrl: 'com/views/dataStructure.html'
            }
        }
    })
    .state('test', {
        url: "/test",
        views: {
            '': {
                templateUrl: 'com/views/test.html'
            }
        }
    })
    .state('christmas',{
        url: "/christmas",
        views: {
            '': {
                templateUrl: 'com/views/task.html',
                controller: "TaskCtrl as taskCtrl"
            }
        }
    })
});
