const DB = require('../model/Data');
const jwt = require('jsonwebtoken');



const jwtSecret = process.env.JWT_SECRET;
const postUser = (req, res) => {
    let { email, password } = req.body;
 
    if(email != undefined || password != undefined){
       var user = DB.users.find( u => u.email == email);
       if(user != undefined){
            if(user.password == password){
                
                jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '48h'}, (err, token) => {
                    
                    if(err){
                        res.status(400);
                        res.json({err: "Falha interna"})
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
 
                });
               
            }else{
                res.status(400);
                res.json({ err: "O e-mail ou a senha está incorreta"})
            }
       }else{
        res.status(404);
        res.json({ err: "O e-mail ou a senha está incorreta"})
       }
    }else{
        res.status(400);
        res.json({ err: "O e-mail ou a senha está incorreta"})
    }
 };

 module.exports = {postUser};