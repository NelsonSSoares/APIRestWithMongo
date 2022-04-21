import express from 'express';

const app = express();

app.use(express.json());

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

app.post('/livros', (req,res)=>{
    livros.push(req.body);
    res.status(201).send('livro cadastrado com sucesso');
    //res.status(201).json(livros[2]);
});


export default app;