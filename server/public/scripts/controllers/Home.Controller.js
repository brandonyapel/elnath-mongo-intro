app.controller('HomeController', ['GamesService', function(GamesService) {
    var self = this;
    self.message = 'Home Page';

    //get request for Games
    self.getGames = GamesService.newGame
  
    //gets object with property list containing games data
    self.games = GamesService.games;

    //model game object to be posted into database
    self.newGame = GamesService.newGame;

    //post requst of newGame

    self.addGame = GamesService.addGame;
}]);