import {Request, Response} from "express"
import { UserModels } from "../database/models/UserModels";

class UserController {

    async findAll(req:Request, res: Response){
        const users = await UserModels.findAll()
        //200 sucesso  204 sucesso porem sem conteudo
        return users.length > 0 ? res.status(200).json(users) : res.status(204).send()
    }

    async findOne(req:Request, res: Response){
        const {userId} = req.params
        const user = await UserModels.findOne({
            where:{
                id: userId
            }
        })
        
        return user ? res.status(200).json(user) : res.status(204).send()

    }

    async create(req:Request, res: Response){
        const {email, nome, idade} = req.body
        const user = await UserModels.create({email, nome, idade})
        console.log({user});
        //201 criado com sucesso
        return res.status(201).json({user})
    }

    async update(req:Request, res: Response){
        const {userId} = req.params;
        const {email,nome,idade} = req.body;

        //nao esquece de fazer validacoes de dados em situacoes fora de contexto de testes
        await UserModels.update(req.body, {where: {id:userId}})
        return res.status(200).send()
    }

    async destroy(req:Request, res: Response){
        const {userId} = req.params
        
        await UserModels.destroy({where: {id:userId}})

        return res.status(204).send()

    }

}


export default new UserController();