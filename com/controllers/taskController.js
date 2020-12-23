app.controller('TaskCtrl', function($scope, $state, $rootScope, $location) {
    'use strict';
    $scope.root = $rootScope;
    $rootScope.state = $state.current.name;
    $scope.christmas = {
        participant: ['月合', '今薇', '沛淇', '珮瑛', '婕瑜', '老師'],
        pointCal: [0, 0, 0, 0, 0, 0],
        point: intList(0, 6, 1),
        picOrder: [0, 1, 2, 2, 1, 0],
        picLocate: 'image/task/chirstmas/',
        picName: ['tree_3.png', 'tree_2.png', 'tree_1.png'],
        picTop: ['gift_1.png', 'gift_2.png', 'gift_3.png', 'gift_4.png' , 'gift_5.png', 'gift_6.png'],
        picText: 'word.png'
    };

    $scope.btnClick = function (idx) {
        let con, htmlStr, cssLocate, newImg, width, height;
        width = $( document ).width();
        height = $( document ).height();
        console.log(width, height);
        cssLocate = [[-40, -80], [60, 50, 40, 30, 20, 10]]
        con = pointCount($scope.christmas.point);
        htmlStr = '<img src="' + $scope.christmas.picLocate  + $scope.christmas.picTop[con] +'" style="width: 30%; position: relative;'
        if ($scope.christmas.pointCal[idx] < 3) {
            htmlStr = htmlStr + ' top: ' + cssLocate[0][0] * height / 821 + 'px;';
        }
        else {
            htmlStr = htmlStr + ' top: ' + cssLocate[0][1] * height / 821 + 'px;';
        }
//        console.log($scope.christmas.point.length);
//        console.log(con)
        if (con != -1){
            htmlStr = htmlStr + ' left: ' + cssLocate[1][con] * width / 1440+ 'px;';
            htmlStr = htmlStr + '">'
            console.log(htmlStr)
            newImg = $(htmlStr);
            $('#taskDiv-'+idx).append(newImg);
            $scope.christmas.pointCal[idx] = $scope.christmas.pointCal[idx] + 1;
        }

    }
    $scope.picUrl = function (idx) {
        return $scope.christmas.picLocate + $scope.christmas.picName[$scope.christmas.picOrder[idx]];
    }
    function intList (min, max, interval) {
        let list = [];
        for (let num = 0; num < (max - min) / interval; num ++ ){
            list.push(num);
        }
        return list
    }
//    function initialPoint (partNum) {
//        let list = [];
//        for (let i = 0; i < partNum; i++){
//            list.push(intList(0, partNum, 1));
//        }
//        return list;
//    }
    function pointCount (list) {
        if (list.length != 0){
//            let tmp, idx = Math.floor(Math.random() * list.length);
//            tmp = list[idx];
//            list.splice(idx, 1);
            let tmp = list[0];
            list.splice(0, 1);
            return tmp;
        }
        return -1;
    }
//    $(document).ready(function(){
//            $(window).resize(function() {
//                resizeCircle();
//                barChart();
//                treeChart();
//            });
//        });
})
