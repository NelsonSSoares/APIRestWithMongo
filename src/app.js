import express from 'express';

const app = express();

const livros = [
    {id: 1, "tilulo": "Tenet"},
    {id: 2, "titulo": "O Resgate do Soldade Ryan"}
]

app.get('/', (req, res)=> {
    res.status(200).send('Curso de Node');
});

app.get('/livros', (req,res) =>{
    res.status(200).json(livros);
} );

export default app;