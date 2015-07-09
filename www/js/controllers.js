angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('SubscribeCtrl', function ($scope, Systems) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        Systems.all().then(function (response) {
            $scope.systems = response.data;
            //console.log("$scope.systems"+JSON.stringify($scope.systems));
        });

        $scope.remove = function (system) {
            Systems.remove(system);
        }
    })

    .controller('SubDetailCtrl', function ($scope, $stateParams, Systems) {
        console.log("$stateParams.id" + $stateParams.id);
        $scope.system = Systems.get($stateParams.id);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })


    .controller('HomeTabCtrl', function ($scope) {
        console.log('HomeTabCtrl');
    });