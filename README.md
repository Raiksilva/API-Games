# API Games
Esta api foi utilizada no processo de aprendizado na criação de APIs. 
## EndPoints
### GET /games
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados.
```
app.get('/games', auth, (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});
```
### Parametros
Nenhum
### Respostas
#### OK! 200
Caso essa resposta aconteça você vai receber a listagem de todos os games. 
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
```
### Parametros
:id Parâmetro dinâmico, essa rota espera um valor específico no lugar do :id 
### Respostas
#### OK! 200
Caso essa resposta aconteça você vai receber a listagem de todos os games. 
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
#### Falha na autenticação! 401
Exemplo de resposta:
