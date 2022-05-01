import chalk from 'chalk';
import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js ';
import routes from './routers/index.js';

db.on('error', console.log.bind(console, chalk.red('Connection Error!')));
db.once('open', () => {
    console.log(chalk.green('Database connected sucessfully!!'));
})

const app = express();


app.use(express.json());

routes(app);


app.delete('/livros/:id', (req, res) =>{
    let {id} = req.params
    let index = buscaLivro(id);
    livros.splice(index, 1); // elemento a ser excluido , numeros de indice posterior a serem excluidos
    console.log(chalk.green(`Cadastro Deletado com  Sucesso!`));
    res.send(`Livro ${id} excluido com sucesso!`);

})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}
export default app;