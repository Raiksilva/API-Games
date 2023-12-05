# API Games
Esta api foi utilizada no processo de aprendizado na criação de APIs. 
## EndPoints
### GET /games
Esse endpoint é responsável por retornar a listagem de todos os jogos cadastrados no banco de dados.
```
app.get('/games', auth, (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});
```
### Parâmetros
Nenhum
### Respostas
#### OK! 200
Caso essa resposta aconteça você vai receber a listagem de todos os jogos. 
Exemplos de resposta:
```
[
    {
        "id": 13,
        "title": "God of War",
        "year": 2018,
        "price": 60
    },
    {
        "id": 17,
        "title": "Homen aranha",
        "year": 2020,
        "price": 50
    },
    {
        "id": 14,
        "title": "God of War 2",
        "year": 2023,
        "price": 60
    }
]
```
#### Falha na autenticação! 401
Caso essa resposta aconteça, significa que aconteceu alguma falha durante a autenticação de requisição. Motivos: Token inválido ou Token expirado.
Exemplo de resposta:
```
{
    "err": "token inválido!"
}
```
## GET/game/:id
Esse endpoint é responsavel por mostrar um unico jogo cadastrado no banco, o jogo é pesquisado pelo seu id.
```
app.get('/game/:id', auth, (req, res) =>{
    if(isNaN(req.params.id) ){
        res.sendStatus(400);
    }else{
        let id = parseInt(req.params.id);
        let games = DB.games.find(g => g.id == id);

        if(games == undefined) {
            res.sendStatus(404);
        }else{
            res.statusCode = 200;
            res.json(games);
        }
    }
});
```
### Parâmetros
:id Parâmetro dinâmico, essa rota espera um valor específico no lugar do :id 
### Respostas
#### OK! 200
Caso essa resposta aconteça você vai receber a listagem de todos os jogos. 
Exemplos de resposta buscando id 17:
```
{
    "id": 17,
    "title": "Homen aranha",
    "year": 2020,
    "price": 50
}
```
#### Falha na autenticação! 401
Caso essa resposta aconteça, significa que aconteceu alguma falha durante a autenticação de requisição. Motivos: Token inválido ou Token expirado.
#### Falha na autenticação! 404
Caso essa resposta aconteça, significa que aconteceu alguma falha na requisição da rota ao banco. Motivos: A url passada está incorreta ou A ult está correta, mas o id selecionado não existe.


## POST/game
Esse endpoint é responsavel por criar um novo jogo no banco.
```
app.post('/game', auth, (req, res) => {
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
});
```
### Parâmetros
Nenhum
### Respostas
#### OK! 200
Caso essa resposta aconteça você vai receber a mensagem informando que o jogo foi cadastrado com sucesso:
#### Falha na autenticação! 400
Caso essa resposta aconteça, significa que o servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente. Motivos: Sintaxe de solicitação malformada, enquadramento de mensagem de solicitação inválida ou roteamento de solicitação enganosa.
#### Falha na autenticação! 401
Caso essa resposta aconteça, significa que aconteceu alguma falha durante a autenticação de requisição. Motivos: Token inválido ou Token expirado.


## DELETE/game/:id
Esse endpoint é responsavel por criar um novo jogo no banco.
```
app.delete('/game/:id', auth, (req, res) =>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        let id = parseInt(req.params.id);
        let index = DB.games.findIndex(g => g.id === id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index, 1);
            res.json("Jogo deletado com sucesso!");
            res.sendStatus(200);
        }
    }
});
```
### Parâmetros
:id Parâmetro dinâmico, essa rota espera um valor específico no lugar do :id 
### Respostas
#### OK! 200
Caso essa resposta aconteça você vai receber a mensagem informando que o jogo foi deletado com sucesso:
#### Falha na autenticação! 400
Caso essa resposta aconteça, significa que o servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente. Motivos: Sintaxe de solicitação malformada, enquadramento de mensagem de solicitação inválida ou roteamento de solicitação enganosa.
#### Falha na autenticação! 401
Caso essa resposta aconteça, significa que aconteceu alguma falha durante a autenticação de requisição. Motivos: Token inválido ou Token expirado.
#### Falha na autenticação! 404
Caso essa resposta aconteça, significa que aconteceu alguma falha na requisição da rota ao banco. Motivos: A url passada está incorreta ou A ult está correta, mas o id selecionado não existe.


## PUT/game/:id
Esse endpoint é responsavel por atualizar um jogo do banco.
```
app.put('/game/:id', auth, (req, res) => {
    
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
});
```
### Parâmetros
:id Parâmetro dinâmico, essa rota espera um valor específico no lugar do :id 
### Respostas
#### OK! 200
Caso essa resposta aconteça você vai receber a mensagem informando que o jogo foi atualizado com sucesso:
#### Falha na autenticação! 400
Caso essa resposta aconteça, significa que o servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente. Motivos: Sintaxe de solicitação malformada, enquadramento de mensagem de solicitação inválida ou roteamento de solicitação enganosa.
#### Falha na autenticação! 401
Caso essa resposta aconteça, significa que aconteceu alguma falha durante a autenticação de requisição. Motivos: Token inválido ou Token expirado.
#### Falha na autenticação! 404
Caso essa resposta aconteça, significa que aconteceu alguma falha na requisição da rota ao banco. Motivos: A url passada está incorreta ou A ult está correta, mas o id selecionado não existe.

## POST/auth/
Esse endpoint é responsavel por validar o usuário na aplicação.
```
app.post("/auth/", (req, res) => {
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
});
```
### Parâmetros
email: E-mail é responsável por retornar fazer o processo de login.

password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail.
### Respostas
#### OK! 200
Caso essa resposta aconteça você vai receber a mensagem informando o token necessario para autorização das demais rotas:
Exemplo de resposta: 
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyYWlrQGdtYWlsLmNvbSIsImlhdCI6MTcwMTIyMzQyOCwiZXhwIjoxNzAxMzk2MjI4fQ.CH8qWzdVB8yFByD9ToPzkGR3Rkfl6gUJuaBHQiNXuHU"
}
```
#### Falha na autenticação! 400
Caso essa resposta aconteça, significa que o servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente. Motivos: Sintaxe de solicitação malformada, enquadramento de mensagem de solicitação inválida ou roteamento de solicitação enganosa.
#### Falha na autenticação! 401
Caso essa resposta aconteça, significa que aconteceu alguma falha durante a autenticação de requisição. Motivos: Token inválido ou Token expirado.
#### Falha na autenticação! 404
Caso essa resposta aconteça, significa que aconteceu alguma falha na requisição da rota ao banco. Motivos: A url passada está incorreta ou A ult está correta, mas o id selecionado não existe.
