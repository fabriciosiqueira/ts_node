import {Request, Response} from "express"
import { FuncionariosModels } from "../database/models/FuncionariosModels";

class FuncionarioController {

    async findAll(req:Request, res: Response){
        const users = await FuncionariosModels.findAll()
        console.log({users});
            
        //200 sucesso  204 sucesso porem sem conteudo
        return users.length > 0 ? res.status(200).json(users) : res.status(204).send()
    }

    async findOne(req:Request, res: Response){
        const {userId} = req.params
        const user = await FuncionariosModels.findOne({
            where:{
                id: userId
            }
        })
        
        return user ? res.status(200).json(user) : res.status(204).send()

    }

    async create(req:Request, res: Response){
        const { nome, cpf, carteira_trabalho, setor, telefones}= req.body
        const user = await FuncionariosModels.create({ nome, cpf, carteira_trabalho, setor, telefones})
        //console.log({user});
        //201 criado com sucesso
        return res.status(201).json({user})
    }

    async update(req:Request, res: Response){
        const {userId} = req.params;
        const { nome, cpf, carteira_trabalho, setor, telefones} = req.body
 
        //nao esquece de fazer validacoes de dados em situacoes fora de contexto de testes
        await FuncionariosModels.update(req.body, {where: {id:userId}})
        return res.status(200).send()
    }

    async destroy(req:Request, res: Response){
        const {userId} = req.params
        
        await FuncionariosModels.destroy({where: {id:userId}})

        return res.status(204).send()

    }

}


export default new FuncionarioController();