tennis.factory('TennisMatch', function() {
	var factory = {};
	var matchScores = ['0', '15', '30', '40', 'Ad'];
	var TennisMatch = {
		settings: {
			maxSets: {type: Number, default: 3},
			maxGames: {type: Number, default: 6},
			maxTiebreakPoints: {type: Number, default: 7},
			adScoring: {type: Boolean, default: true}
		},
		currentSet: {type: Number, default: 0},
		winner: {type: Number, default: -1},
		player1: {
			name: {type: String},
			id: {type: String},
			score: {type: String, enum: matchScores, default: matchScores[0]},
			games: [{type: Number, default: 0}],
			sets: {type: Number, default: 0},
			aces: {type: Number, default: 0},
			forehandWinners: {type: Number, default: 0},
			backhandWinners: {type: Number, default: 0},
			approachShotWinners: {type: Number, default: 0},
			volleyWinners: {type: Number, default: 0},
			baselineErrors: {type: Number, default: 0},
			approachShotErrors: {type: Number, default: 0},
			volleyErrors: {type: Number, default: 0},
			doubleFaults: {type: Number, default: 0},
		},
		player2: {
			name: {type: String},
			id: {type: String},
			score: {type: String, enum: matchScores, default: matchScores[0]},
			games: [{type: Number, default: 0}],
			sets: {type: Number, default: 0},
			aces: {type: Number, default: 0},
			forehandWinners: {type: Number, default: 0},
			backhandWinners: {type: Number, default: 0},
			approachShotWinners: {type: Number, default: 0},
			volleyWinners: {type: Number, default: 0},
			baselineErrors: {type: Number, default: 0},
			approachShotErrors: {type: Number, default: 0},
			volleyErrors: {type: Number, default: 0},
			doubleFaults: {type: Number, default: 0},
		},
	}

	factory.getMatch = function() {
		return TennisMatch;
	}

	return factory;

})