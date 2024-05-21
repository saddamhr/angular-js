let myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', function ($scope) {
  $scope.ninjas = [
    { name: 'saddam', belt: 'green', rate: 50, available: true },
    { name: 'taifur', belt: 'yellow', rate: 30, available: true },
    { name: 'masud', belt: 'red', rate: 50, available: true },
    { name: 'bipro', belt: 'orange', rate: 10, available: false },
    { name: 'an', belt: 'orange', rate: 1150, available: false },
  ];
});
