const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

function auth(req, res, next) {

    const authtoken = req.headers['authorization'];
    if(authtoken != undefined){
        
        const bearer = authtoken.split(' ');
        let token = bearer[1]
        
        jwt.verify(token, jwtSecret, (err, data) => {
           if(err){
            res.status(401);
            res.json( { err: "token inválido!"});
            }else{
                req.token = token;
                req.loggedUser = {id: data.id,email: data.email};
                next();
            }
        });
    }else{
        res.status(401);
        res.json({err:"problema no token"});
    }
    
}

module.exports = auth;