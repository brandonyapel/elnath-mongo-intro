
app.service('GamesService', ['$http', function ($http) {
    var self = this;

    self.games = {list: []};
    self.newGame = {name: '',duration: '', numberOfPlayers: '', publishedDate: '', votes: 0};


    self.getGames = function () {
        $http({
            method: 'GET',
            url: '/game'
        }).then(function (response) {
            self.games.list = response.data
            console.log(self.heroes)
        })
    };
    self.getGames();

    self.addGame = function (newGame) {
        console.log('addGame()',newGame)
        $http({
            method: 'POST',
            url: '/game',
            data:  newGame
        }).then(function (response) {
            self.getGames();
            self.newGame.name = '';
            self.newGame.duration = '';
            self.newGame.numberOfPlayers = '';
            self.newGame.publishedDate = '';
            self.newGame.votes = '';
        

        })
    };

}]);