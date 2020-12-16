app.controller('MainCtrl', function($scope, $state, $rootScope, $location) {
    'use strict';
    $scope.root = $rootScope;
    $rootScope.state = $state.current.name;

    $rootScope.link = function (href) {
        
//        if (href != 'home' && href != 'dataStructure'){
        if (href != 'home'){
            href = 'comingSoon';
        }
        $location.path("/" + href);
    };
    

    $scope.$on('$stateChangeSuccess', function () {
        $rootScope.state = $state.current.name;
        $("#"+$rootScope.state).prop('checked',true);
        console.log($rootScope.state);
    })

    
//    $(document).ready(function(){
//            $(window).resize(function() {
//                resizeCircle();
//                barChart();
//                treeChart();
//            });
//        });
})