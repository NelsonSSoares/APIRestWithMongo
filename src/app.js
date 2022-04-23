import chalk from 'chalk';
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

app.get('/livros/:id', (req, res) =>{
    //req.body = {id}
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
    console.log(chalk.green(`Consulta realizada com  Sucesso!`));
})

app.post('/livros', (req,res)=>{
    livros.push(req.body);
    res.status(201).send('livro cadastrado com sucesso');
    //res.status(201).json(livros[2]);
});

app.put('/livros/:id', (req, res) =>{
    //req.body = {id}
    let index = buscaLivro(req.params.id);

    livros[index].titulo = req.body.titulo

    console.log(chalk.green(`Cadastro alterado com  Sucesso!`));

    res.json(livros);

})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}
export default app;