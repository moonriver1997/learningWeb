app.controller('TaskCtrl', function($scope, $state, $rootScope, $location) {
    'use strict';
    $scope.root = $rootScope;
    $rootScope.state = $state.current.name;
    $scope.christmas = {
        participant: ['月合', '今薇', '沛淇', '珮瑛', '婕妤', '老師'],
        picOrder: [0, 1, 2, 2, 1, 0],
        picLocate: 'image/task/chirstmas/',
        picName: ['tree_3.png', 'tree_2.png', 'tree_1.png'],
        text: 'word.png'
    };

    $scope.btnClick = function (idx) {
        console.log(idx);
        let newDiv = $('<div style="position: relative; top: -80px;">a</div>');
        $('#taskDiv-'+idx).append(newDiv);

    }
    $scope.picUrl = function (idx) {
        return $scope.christmas.picLocate + $scope.christmas.picName[$scope.christmas.picOrder[idx]];
    }
    
//    $(document).ready(function(){
//            $(window).resize(function() {
//                resizeCircle();
//                barChart();
//                treeChart();
//            });
//        });
})