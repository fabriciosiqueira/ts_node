import express, {json} from "express";
const  cors = require("cors");
import { db } from "./database/db";
import  {router}  from "./routes";

const app = express();

//liberar acesso de rotas para qualquer url pesquisar


app.use(json());
app.use(cors())
app.use(router);



app.listen(4444, async () => {
    await db.sync();
    console.log(`App  running at port 4444!`);  
});

