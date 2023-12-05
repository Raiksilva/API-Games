const DB = require("../model/Data.js");

// Criação de novos games
const postGames =  (req, res) => {
    let {id, title, price, year} = req.body;

    if(id == null || title == null || price == null || year == null){
       res.sendStatus(400);
    }else{
       DB.games.push({
           id,
           title,
           price,
           year
        });
       res.json("Jogo cadastrado com sucesso!");
       res.sendStatus(200);
    }
};

module.exports =  {postGames};