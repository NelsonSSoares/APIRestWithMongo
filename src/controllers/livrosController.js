
import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = (req, res) => {

        livros.find((error, livros) => {

            res.status(200).json(livros);
        });
    }

    static listarLivroPorId = (req,res) => {
        const id = req.params.id;

        livros.findById(id, (error, livros)=>{
            if(error){
                res.status(400).send({message: `${error.message} id não encontrado!` })
            }else{
                res.status(200).send(livros.toJSON());
            }
        })
    }


    
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((error)=>{
            if(error){
                res.status(500).send({message: `${error.message} - error to create a book`})
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (error)=>{
            if(!error){
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            }else{
                res.status(500).send({message: error.message})
            }
        });

    }
}
export default LivroController;
