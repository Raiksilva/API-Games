const express = require("express");
const router = express.Router();
const GamesController = require("../controller/getGames");
const PutGamesController = require("../controller/putGames");
const DelGamesController = require("../controller/delGames");
const PostGamesController = require("../controller/postGames");
const auth = require("../middleware/auth");

router.get('/games', auth, GamesController.getGames);
router.get('/games/:id', auth, GamesController.getGamesById);
router.delete('/game/:id', auth, DelGamesController.delGames);
router.put('/game/:id', auth, PutGamesController.putGames);
router.post('/game', auth, PostGamesController.postGames);


module.exports = router;