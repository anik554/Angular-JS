console.log("Hello Anik");

num1 = 30;
num2 = 50;
resultAdd = num1 + num2;
resultSub = num2 - num1;
console.log(
  "Addition number : " + resultAdd + "Subtraction number :" + resultSub
);

var app = angular.module("myApp", []);
app.controller("myController", [
  "$scope",
  function ($scope) {
    ($scope.fName = "Anik"),
      ($scope.lName = "Imtiaz"),
      ($scope.fullname = function () {
        return $scope.fName + " " + $scope.lName;
      }),
      ($scope.myData = [
        {
          name: "Anik Imtiaz",
          age: 30,
          position: "Programmer",
        },
        {
          name: "Abir Imtiaz",
          age: 33,
          position: "Exceutive",
        },
        {
          name: "Mou Moni",
          age: 28,
          position: "Asst. manager",
        },
        {
          name: "Shifat Ajbin",
          age: 31,
          position: "Advocate",
        },
      ]);
  },
]);
