angular.module('friendsList')
    .controller('mainCtrl', function ($scope) {

        $scope.friends = [
            'Andrei',
            'Trevin',
            'Derrick',
            'Braden',
            'Kailyn'
        ];

        $scope.inputText;

        $scope.addFriend = function () {
            $scope.friends.push($scope.inputText);
            $scope.inputText = '';
        };

        $scope.enterKey = function (keyEvent) {
            if (keyEvent.which === 13) {
                $scope.addFriend();
            }
        }

        $scope.deleteFriend = function (friend) {
            $scope.friends.splice($scope.friends.indexOf(friend), 1);
        }

    });
