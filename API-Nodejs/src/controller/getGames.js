const DB = require("../model/Data");

const getGames = (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
};

const getGamesById = (req, res) =>{
   
    if(isNaN(req.params.id) ){
        res.sendStatus(400);
    }else{
        let id = parseInt(req.params.id);

        var HATEOAS = [
            {
                href: "http://localhost:8080/game/" + id,
                method: "DELETE",
                rel: "delete_game"
            },
            {
                href: `http://localhost:8080/game/${id}`,
                method: "PUT",
                rel: "put_game"
            },
            {
                href: "http://localhost:8080/game/" + id,
                method: "GET",
                rel: "get_game"
            },
            {
                href: "http://localhost:8080/games",
                method: "GET",
                rel: "get_all_games"
            }
        ]

        let game = DB.games.find(g => g.id == id);

        if(game == undefined) {
            res.sendStatus(404);
        }else{
            res.statusCode = 200;
            res.json({games: game, _links: HATEOAS});
        }
    }
};


module.exports = { getGames, getGamesById };

