import express from 'express';
import FuncionarioController from './controllers/FuncionarioController';
import UserController from './controllers/UserController';


const router = express.Router();

/***Desafio ORM O Liberal****/
//create
router.post("/funcionarios", FuncionarioController.create)

//read
router.get("/funcionarios", FuncionarioController.findAll)

router.get("/funcionarios/:userId", FuncionarioController.findOne)

//update
router.put("/funcionarios/:userId", FuncionarioController.update)

//delete
router.delete("/funcionarios/:userId", FuncionarioController.destroy)



/***testes de api recem criada****/
//create
router.post("/users", UserController.create)

//read
router.get("/users", UserController.findAll)

router.get("/users/:userId", UserController.findOne)

//update
router.put("/users/:userId", UserController.update)

//delete
router.delete("/users/:userId", UserController.destroy)

export  {router};
