const DB = require("../model/Data.js");


const delGames = (req, res) =>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id);
        let index = DB.games.findIndex(g => g.id === id);

        if(index == -1){
            res.send("Jogo não encontrado!");
            res.sendStatus(404);
        }else{
            DB.games.splice(index, 1);
            res.json("Jogo deletado com sucesso!");
            res.sendStatus(200);
        }
    }
};

module.exports = {delGames};