//Eote Stats Code
angular.module('demoApp')
.factory('EotEStatsFactory', function () {})
.controller('EotEStatsController', function ($scope, EotEStatsFactory) {
    $scope.success = 0;
    $scope.advantage = 0;
    $scope.triumph = 0;
    $scope.failure = 0;
    $scope.threat = 0;
    $scope.despair = 0;
    $scope.totalSuccess = 0;
    $scope.totalAdvantage = 0;
    $scope.totalTriumph = 0;
    $scope.totalFailure = 0;
    $scope.totalThreat = 0;
    $scope.totalDespair = 0;
    $scope.totalPasses = 0;
    $scope.averageSuccess = 0;
    $scope.averageAdvantage = 0;
    $scope.averageTriumph = 0;
    $scope.averageFailure = 0;
    $scope.averageThreat = 0;
    $scope.averageDespair = 0;
    $scope.averagePasses = 0;

    $scope.calculateStatistics = function () {
        $scope.totalSuccess = 0;
        $scope.totalAdvantage = 0;
        $scope.totalTriumph = 0;
        $scope.totalFailure = 0;
        $scope.totalThreat = 0;
        $scope.totalDespair = 0;
        $scope.totalPasses = 0;
        $scope.averageSuccess = 0;
        $scope.averageAdvantage = 0;
        $scope.averageTriumph = 0;
        $scope.averageFailure = 0;
        $scope.averageThreat = 0;
        $scope.averageDespair = 0;
        $scope.averagePasses = 0;
        for (var i = 0; i < $scope.numChecks; i++) {
            $scope.success = 0;
            $scope.advantage = 0;
            $scope.triumph = 0;
            $scope.failure = 0;
            $scope.threat = 0;
            $scope.despair = 0;
            for (var j = 0; j < $scope.numYellowDice; j++) {
                var randomNum = Math.floor((Math.random() * 12) + 1);
                switch (randomNum) {
                    case 1:
                        break;
                    case 2: $scope.success++;
                        break;
                    case 3: $scope.success++;
                        break;
                    case 4: $scope.success++; $scope.success++;
                        break;
                    case 5: $scope.success++; $scope.success++;
                        break;
                    case 6: $scope.advantage++;
                        break;
                    case 7: $scope.advantage++; $scope.success++;
                        break;
                    case 8: $scope.advantage++; $scope.success++;
                        break;
                    case 9: $scope.advantage++; $scope.success++;
                        break;
                    case 10: $scope.advantage++; $scope.advantage++;
                        break;
                    case 11: $scope.advantage++; $scope.advantage++;
                        break;
                    case 12: $scope.triumph++; $scope.success++;
                        break;
                }
            }
            for (var j = 0; j < $scope.numGreenDice; j++) {
                var randomNum = Math.floor((Math.random() * 8) + 1);
                switch (randomNum) {
                    case 1:
                        break;
                    case 2: $scope.success++;
                        break;
                    case 3: $scope.success++;
                        break;
                    case 4: $scope.success++; $scope.success++;
                        break;
                    case 5: $scope.advantage++;
                        break;
                    case 6: $scope.advantage++;
                        break;
                    case 7: $scope.advantage++; $scope.success++;
                        break;
                    case 8: $scope.advantage++; $scope.advantage++;
                        break;
                }
            }
            for (var j = 0; j < $scope.numBlueDice; j++) {
                var randomNum = Math.floor((Math.random() * 6) + 1);
                switch (randomNum) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3: $scope.advantage++; $scope.advantage++;
                        break;
                    case 4: $scope.advantage++;
                        break;
                    case 5: $scope.success++; $scope.advantage++;
                        break;
                    case 6: $scope.success++;
                        break;
                }
            }
            for (var j = 0; j < $scope.numRedDice; j++) {
                var randomNum = Math.floor((Math.random() * 12) + 1);
                switch (randomNum) {
                    case 1:
                        break;
                    case 2: $scope.failure++;
                        break;
                    case 3: $scope.failure++;
                        break;
                    case 4: $scope.failure++; $scope.failure++;
                        break;
                    case 5: $scope.failure++; $scope.failure++;
                        break;
                    case 6: $scope.threat++;
                        break;
                    case 7: $scope.threat++;
                        break;
                    case 8: $scope.threat++; $scope.failure++;
                        break;
                    case 9: $scope.threat++; $scope.failure++;
                        break;
                    case 10: $scope.threat++; $scope.threat++;
                        break;
                    case 11: $scope.threat++; $scope.threat++;
                        break;
                    case 12: $scope.despair++; $scope.failure++;
                        break;
                }
            }
            for (var j = 0; j < $scope.numPurpleDice; j++) {
                var randomNum = Math.floor((Math.random() * 8) + 1);
                switch (randomNum) {
                    case 1:
                        break;
                    case 2: $scope.failure++;
                        break;
                    case 3: $scope.failure++; $scope.failure++;
                        break;
                    case 4: $scope.threat++;
                        break;
                    case 5: $scope.threat++;
                        break;
                    case 6: $scope.threat++;
                        break;
                    case 7: $scope.threat++; $scope.threat++;
                        break;
                    case 8: $scope.threat++; $scope.failure++;
                        break;
                }
            }
            for (var j = 0; j < $scope.numBlackDice; j++) {
                var randomNum = Math.floor((Math.random() * 6) + 1);
                switch (randomNum) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3: $scope.failure++;
                        break;
                    case 4: $scope.failure++;
                        break;
                    case 5: $scope.threat++;
                        break;
                    case 6: $scope.threat++;
                        break;
                }
            }
            $scope.totalSuccess += $scope.success;
            $scope.totalAdvantage += $scope.advantage;
            $scope.totalTriumph += $scope.triumph;
            $scope.totalFailure += $scope.failure;
            $scope.totalThreat += $scope.threat;
            $scope.totalDespair += $scope.despair;
            if ($scope.success > $scope.failure) {
                $scope.totalPasses++;
            }
        }
        $scope.averageSuccess = $scope.totalSuccess/$scope.numChecks;
        $scope.averageAdvantage = $scope.totalAdvantage / $scope.numChecks;
        $scope.averageTriumph = $scope.totalTriumph / $scope.numChecks;
        $scope.averageFailure = $scope.totalFailure / $scope.numChecks;
        $scope.averageThreat = $scope.totalThreat / $scope.numChecks;
        $scope.averageDespair = $scope.totalDespair / $scope.numChecks;
        $scope.averagePasses = $scope.totalPasses / $scope.numChecks;
    };
});