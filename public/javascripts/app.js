angular.module("doc", [])
    .controller("SearchController", function ($scope, $http) {
        $scope.searchTxt = "";
        $scope.doctors = [];
        $http.get("/alldoc").then(function (data) {
            $scope.doctors = data.data;
        })

        $scope.hello = function () {
            $http.get("/alldoc/" + $scope.searchTxt).then(function (data) {
                $scope.doctors = data.data;
            })
        }
    })
