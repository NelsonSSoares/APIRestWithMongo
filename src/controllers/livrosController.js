import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = (req, res) => {

        livros.find((error, livros) => {

            res.status(200).json(livros);
        });
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((error)=>{
            if(error){
                res.status(500).send(chalk.red({message: `${error.message} - error to create a book`}))
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }
}
export default LivroController;
