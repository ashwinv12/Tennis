tennis.controller('scorecard', function ($scope) {

	$scope.players = [
		{name: 'Ashwin Vaithianathan', school: 'MVHS', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: ''},
		{name: 'Tim Padjen', school: 'TRHS', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: ''}
	]

	$scope.editing = false;
	$scope.preMatch = true;
	$scope.matchOver = false;

	$scope.selectServer = function(index) {
		if ($scope.preMatch) {
			$scope.players[index].serving = true;
			$scope.preMatch = false;
		}	
	}

	var storeSetGames = function(index1, index2) {
		if ($scope.players[index1].sets + $scope.players[index2].sets == 0) {
			$scope.players[index1].set1games =  $scope.players[index1].games;
			$scope.players[index2].set1games =  $scope.players[index2].games;
		}
		if ($scope.players[index1].sets + $scope.players[index2].sets == 1) {
			$scope.players[index1].set2games =  $scope.players[index1].games;
			$scope.players[index2].set2games =  $scope.players[index2].games;
		}
		if ($scope.players[index1].sets + $scope.players[index2].sets == 2) {
			$scope.players[index1].set3games =  $scope.players[index1].games;
			$scope.players[index2].set3games =  $scope.players[index2].games;
		}
	}
	var setWon = function(index1, index2) {
		$scope.players[index1].sets += 1;
		$scope.players[index1].games = 0;
		$scope.players[index2].games = 0;
		$scope.players[index1].points = 0;
		$scope.players[index2].points = 0;
		if ($scope.players[index1].sets == 2) {
			$scope.matchOver = true;
		}
	}

	var setServer = function(index1, index2) {
		if ($scope.players[index1].serving) {
			$scope.players[index1].serving = false;
			$scope.players[index2].serving = true;
		}
		else {
			$scope.players[index2].serving = false;
			$scope.players[index1].serving = true;
		}
	}
	$scope.addPoint = function(index1) {
		var index2 = null;
		if (index1 == 0) {
			index2 = 1;
		}
		if (index1 == 1) {
			index2 = 0;
		}
		var deuce = false;
		var p1Points = $scope.players[index1].points;
		var p2Points = $scope.players[index2].points;
		var p1Games = $scope.players[index1].games;
		var p2Games = $scope.players[index2].games;

		if (!$scope.matchOver) {
			if (p1Points<30) {
				if (!(p1Games == 6 && p2Games == 6)) {
					$scope.players[index1].points += 15;
				}
				
			}
			if (p1Points == 30) {
				$scope.players[index1].points += 10;
			}

			if (p1Points == 40) {
				if (p2Points == 40) {    // Deuce
					$scope.players[index1].points = 'AD';
					$scope.players[index2].points = '--';
				}
				if (p2Points < 40) {
					$scope.players[index1].points = 0;
					$scope.players[index2].points = 0;
					$scope.players[index1].games += 1;
					setServer(index1, index2);
				}
			}
			if (p1Points.toString() == 'AD') {
				$scope.players[index1].points = 0;
				$scope.players[index2].points = 0;
				$scope.players[index1].games += 1;
			}
			if (p1Points.toString() == '--') {
				$scope.players[index1].points = 40;
				$scope.players[index2].points = 40;
			}
			if ($scope.players[index1].games == 6) {
				if ($scope.players[index2].games <= 4) {
					storeSetGames(index1, index2);	
					setWon(index1, index2);
				}
			}
			if (p1Games == 6 && p2Games == 6) {	    // TIE-BREAK
				$scope.players[index1].points += 1;
				if (($scope.players[index1].points + $scope.players[index2].points)%2 != 0) {
					setServer(index1, index2);
				}
				if (p1Points >= 6 && p1Points-p2Points >= 1) {		
					$scope.players[index1].games += 1;
					storeSetGames(index1, index2);
					setWon(index1, index2);
					setServer(index1, index2);
				}	
			}
			if ($scope.players[index1].games == 7) {
				storeSetGames(index1, index2);
				setWon(index1, index2);
			}
		}
	}

})