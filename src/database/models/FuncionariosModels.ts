import  {DataTypes}  from "sequelize";
import {db} from "../db";
export const FuncionariosModels = db.define("funcionario", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    carteira_trabalho: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefones: {
        type: DataTypes.JSON,
        allowNull: false,
     
    },
  
})