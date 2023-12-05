const DB = require("../model/Data.js");

const putGames = (req, res) => {
    
    if(isNaN(req.params.id) ){
        res.sendStatus(400);
    }else{

        let id = parseInt(req.params.id);
        let game = DB.games.find(g => g.id == id);

        if(game == undefined) {
            res.sendStatus(404);
        }else{
            let{title, price, year} = req.body;

            
            if(title != undefined){
            
                game.title = title;
            
            }
            
            if(year != undefined){
            
                game.year = year;
            
            }
            if(price != undefined){
            
                game.price = price;                
            
            }
            res.json("Jogo atualizado com sucesso!");
            res.sendStatus(200);
        }
    }
};

module.exports = {putGames};