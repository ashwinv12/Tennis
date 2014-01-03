tennis.factory('allPlayers', function() {
	var factory = {};
	var players = [
		{name: 'Ashwin Vaithianathan', school: 'MVHS', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Chad DeLine', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Daniel Stephan (1)', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Marcus Hock (2)', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Evan Hoodmaker', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'David Lai', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Mason Martin', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Ashwin Sarwal', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Logan Schwanz', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Kaden Swarr', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
		{name: 'Grant Wood', school: '----', serving: false, sets: 0, games: 0, points: 0, set1games: '', set2games: '', aces: 0, fw: 0, bw: 0, aw: 0, vw: 0, oue: 0, df: 0, ae: 0, ve: 0},
	];

	factory.getPlayers = function() {
		return players;
	};
	return factory;
})