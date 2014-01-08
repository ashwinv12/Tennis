tennis.factory('allPlayers', function() {
	var factory = {};
	var players = [
		{name: 'Ashwin Vaithianathan', school: 'MVHS'},
		{name: 'Chad DeLine'},
		{name: 'Daniel Stephan'},
		{name: 'Marcus Hock'},
		{name: 'Evan Hoodmaker'},
		{name: 'David Lai'},
		{name: 'Mason Martin'},
		{name: 'Ashwin Sarwal'},
		{name: 'Logan Schwanz'},
		{name: 'Kaden Swarr'},
		{name: 'Grant Wood'},
	];

	factory.getPlayers = function() {
		return players;
	};
	return factory;
})