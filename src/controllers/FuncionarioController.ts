import {Request, Response} from "express"
import { FuncionariosModels } from "../database/models/FuncionariosModels";

class FuncionarioController {

    async findAll(req:Request, res: Response){
        let users:any = await FuncionariosModels.findAll()

       /*  users.map((user:any,index:number) => {
            users[index].telefones =  JSON.parse(users[index].telefones)
        })  */

        //console.log({res: res.statusCode});
        
            
        //200 sucesso  204 sucesso porem sem conteudo
        return users.length > 0 ? res.status(200).json({statusCode: res.statusCode ,users}) : res.status(204).json({statusCode: res.statusCode ,users})
    }

    async findOne(req:Request, res: Response){
        const {userId} = req.params
        let user:any = await FuncionariosModels.findOne({
            where:{
                id: userId
            }
        })

       /*  user.telefones = JSON.parse(user.telefones) */

        return user ? res.status(200).json(user) : res.status(204).send()

    }

    async create(req:Request, res: Response){
        const { nome, cpf, carteira_trabalho, setor, telefones}= req.body
        //console.log(req.body);
       
        const user = await FuncionariosModels.create({ nome, cpf, carteira_trabalho, setor, telefones})
       
        //201 criado com sucesso
        return res.status(201).json({statusCode: res.statusCode, user})
    }

    async update(req:Request, res: Response){
        const {userId} = req.params;
        //const { nome, cpf, carteira_trabalho, setor, telefones} = req.body
 
        //nao esquecer de fazer validacoes de dados em situacoes fora de contexto de testes
        await FuncionariosModels.update(req.body, {where: {id:userId}})
        return res.status(200).json({statusCode: res.statusCode})
    }

    async destroy(req:Request, res: Response){
        const {userId} = req.params
        
        await FuncionariosModels.destroy({where: {id:userId}})

        return res.status(204).send()

    }

}


export default new FuncionarioController();