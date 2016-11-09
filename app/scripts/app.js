var app = angular.module("blocChat", ["firebase"]);

app.controller("ChatCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});

