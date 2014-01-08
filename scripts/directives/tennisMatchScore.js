tennis.directive('tennisMatch', function () {
	return {
		restrict: 'E',
		templateUrl: 'tennisScore.html',
		replace: true,
		link: function(scope, elem, attr, controller) {
		},
		controller: function ($scope, allPlayers, TennisMatch) {
			
			$scope.match = TennisMatch.getMatch();
			
			

			$scope.players = [];

			$scope.playerList = allPlayers.getPlayers();
			$scope.points = [];

			$scope.editing = false;
			$scope.preMatch = true;
			$scope.matchOver = false;
			$scope.pointWon = false;
			$scope.matchExists = false;
			$scope.errorExists = false;
			$scope.noMatchType = false;
			$scope.noPlayersExist = false;
			$scope.samePlayers = false;
			$scope.matchReady = false;
			$scope.adScoring = true;

			$scope.matchFormat = 'best2of3'; // Default
			$scope.tiebreakType = '12point'; // Default

			$scope.validate = function() {
				if (!($scope.players[0] == null || $scope.players[1] == null || $scope.players[0] == $scope.players[1])) {
					$scope.matchReady = true;
				}
				else {
					$scope.matchReady = false;
				}
			}

			function Player(selectedPlayer) {
				this.name = selectedPlayer.name || '';
				this.school = selectedPlayer.school || '----';
				this.serving = false;
				this.sets = 0;
				this.games = 0;
				this.points = 0;
				this.set1games = '';
				this.set2games = '';
				this.aces = 0;
				this.fw = 0;
				this.bw = 0;
				this.aw = 0;
				this.vw = 0;
				this.oue = 0;
				this.df = 0;
				this.ae = 0;
				this.ve = 0;
			}

			$scope.setPlayer = function(selectedPlayer, index) {
				var createdPlayer = new Player(selectedPlayer);
				if (index == 1) {
					$scope.players[0] = (createdPlayer);
				}
				if (index == 2) {
					$scope.players[1] = (createdPlayer);
				}
			}

			$scope.startMatch = function() {	
				$scope.matchExists = true;
				if ($scope.matchFormat == 'best2of3' || $scope.matchFormat == 'best3of5') {
					$scope.match.settings.maxGames = 6;
				}
				if ($scope.matchFormat == '8gameproset') {
					$scope.match.settings.maxGames = 8;
				}
				if ($scope.tiebreakType == '12point') {
					$scope.match.settings.maxTiebreakPoints = 7;
				}
				if ($scope.tiebreakType == 'super') {
					$scope.match.settings.maxTiebreakPoints = 10;
				}
			}

			$scope.setFormat = function(type) {
				$scope.matchFormat = type;
			}

			$scope.setTiebreakType = function(type) {
				$scope.tiebreakType = type;
			}

			$scope.point = function(index) {
				$scope.pointWon = true;
				$scope.currentIndex = index;
				$scope.currentPlayer = $scope.players[index];
			}
			$scope.addAce = function(index) {
				var name = $scope.players[index].name;
				$scope.lastPoint = name + ' - Ace/Serve Winner';
				$scope.players[index].aces += 1;
				$scope.points.push($scope.lastPoint);
			}

			$scope.addFW = function(index) {
				var name = $scope.players[index].name;
				$scope.lastPoint = name + ' - Baseline Forehand Winner';
				$scope.players[index].fw += 1;
				$scope.points.push($scope.lastPoint);
			}

			$scope.addBW = function(index) {
				var name = $scope.players[index].name;
				$scope.lastPoint = name + ' - Baseline Backhand Winner';
				$scope.players[index].bw += 1;
				$scope.points.push($scope.lastPoint);
			}

			$scope.addAW = function(index) {
				var name = $scope.players[index].name;
				$scope.lastPoint = name + ' - Approach Shot Winner';
				$scope.players[index].aw += 1;
				$scope.points.push($scope.lastPoint);
			}

			$scope.addVW = function(index) {
				var name = $scope.players[index].name;
				$scope.lastPoint = name + ' - Volley Winner';
				$scope.players[index].vw += 1;
				$scope.points.push($scope.lastPoint);
			}

			$scope.addOUE = function(index) {
				if (index == 0) {
					index2 = 1;
				}
				if (index == 1) {
					index2 = 0;
				}
				var name = $scope.players[index2].name;
				$scope.lastPoint = name + ' - Baseline Error';
				$scope.players[index2].oue += 1;
				$scope.points.push($scope.lastPoint);
			}

			$scope.addDF = function(index) {	
				if (index == 0) {
					index2 = 1;
				}
				if (index == 1) {
					index2 = 0;
				}
				var name = $scope.players[index2].name;
				$scope.lastPoint = name + ' - Double Fault';
				$scope.players[index2].df += 1;
				$scope.points.push($scope.lastPoint);
			}

			$scope.addAE = function(index) {	
				if (index == 0) {
					index2 = 1;
				}
				if (index == 1) {
					index2 = 0;
				}
				var name = $scope.players[index2].name;
				$scope.lastPoint = name + ' - Approach Shot Error';
				$scope.players[index2].ae += 1;
				$scope.points.push($scope.lastPoint);
			}

			$scope.addVE = function(index) {	
				if (index == 0) {
					index2 = 1;
				}
				if (index == 1) {
					index2 = 0;
				}
				var name = $scope.players[index2].name;
				$scope.lastPoint = name + ' - Volley Error';
				$scope.players[index2].ve += 1;
				$scope.points.push($scope.lastPoint);
			}


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

			var gameWon = function(index1, index2) {
				$scope.players[index1].points = 0;
				$scope.players[index2].points = 0;
				$scope.players[index1].games += 1;
				setServer(index1, index2);
			}

			var setWon = function(index1, index2) {
				$scope.players[index1].sets += 1;
				$scope.players[index1].games = 0;
				$scope.players[index2].games = 0;
				$scope.players[index1].points = 0;
				$scope.players[index2].points = 0;
				if ($scope.matchFormat == 'b2of3') {
					if ($scope.players[index1].sets == 2) {
						$scope.matchOver = true;
					}
				}
				if ($scope.matchFormat == 'b3of5') {
					if ($scope.players[index1].sets == 3) {
						$scope.matchOver = true;
					}
				}
				if ($scope.matchFormat == '8gameproset') {
					if ($scope.players[index1].sets == 1) {
						$scope.matchOver = true;
					}
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
				$scope.pointWon = true;
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
						if (!(p1Games == $scope.match.settings.maxGames && p2Games == $scope.match.settings.maxGames)) {
							$scope.players[index1].points += 15;
						}
						
					}
					if (p1Points == 30) {
						$scope.players[index1].points += 10;
					}

					if (p1Points == 40) {
						if (p2Points == 40) {	// Deuce
							if ($scope.adScoring) {
								$scope.players[index1].points = 'AD';
								$scope.players[index2].points = '--';
							}
							if (!$scope.adScoring) {
								gameWon(index1, index2);
							}
						}
						if (p2Points < 40) {
							gameWon(index1, index2);
						}
					}
					if (p1Points.toString() == 'AD') {
						gameWon(index1, index2);
					}
					if (p1Points.toString() == '--') {
						$scope.players[index1].points = 40;
						$scope.players[index2].points = 40;
					}
					if ($scope.players[index1].games == $scope.match.settings.maxGames) {
						if ($scope.players[index2].games <= $scope.match.settings.maxGames-2) {
							storeSetGames(index1, index2);
							setWon(index1, index2);
						}
					}
					if (p1Games == $scope.match.settings.maxGames && p2Games == $scope.match.settings.maxGames) {		// TIE-BREAK
						$scope.players[index1].points += 1;
						if (($scope.players[index1].points + $scope.players[index2].points)%2 != 0) {
							setServer(index1, index2);
						}
						if (p1Points >= $scope.match.settings.maxTiebreakPoints-1 && p1Points-p2Points >= 1) {
							$scope.players[index1].games += 1;
							storeSetGames(index1, index2);
							setWon(index1, index2);
							setServer(index1, index2);
						}
					}
					if ($scope.players[index1].games == $scope.match.settings.maxGames+1) {
						storeSetGames(index1, index2);
						setWon(index1, index2);
					}
				}			
			}
		}
	}
})