// Code goes here
var myApp = angular.module('myApp', []);
function MyController($scope, $http) {
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  //$scope.meals = [];
  var dishes = [
    'noodles',
    'sausage',
    'beans on toast',
    'cheeseburger',
    'battered mars bar',
    'crisp butty',
    'yorkshire pudding',
    'wiener schnitzel',
    'sauerkraut mit ei',
    'salad',
    'onion soup',
    'bak choi',
    'avacado maki'
  ];
  var sides = [
    'with chips',
    'a la king',
    'drizzled with cheese sauce',
    'with a side salad',
    'on toast',
    'with ketchup',
    'on a bed of cabbage',
    'wrapped in streaky bacon',
    'on a stick with cheese',
    'in pitta bread'
  ];
  for (var i = 1; i <= 100; i++) {
    var dish = dishes[Math.floor(Math.random() * dishes.length)];
    var side = sides[Math.floor(Math.random() * sides.length)];
   // $scope.meals.push('meal ' + i + ': ' + dish + ' ' + side);
  }
  
  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };

  $http.get("http://localhost:8080/kevin/test/pagipagi/").success(function(data) {
    if ( data.status = true) {
      $scope.contents = data;
    }
    
  });

  console.log($scope.meals);
}
function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
} 
