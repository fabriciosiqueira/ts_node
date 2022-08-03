import express, {json} from "express";
import { db } from "./database/db";
import  {router}  from "./routes";

const app = express();

app.use(json());
app.use(router);


app.listen(3000, async () => {
    await db.sync();
    console.log(`App  running at port 3000!`);  
});

