import 'dotenv/config'
import app  from "./src/app.js";
import ConnectDataBase from "./src/config/database.js";
import { testAi } from './src/services/ai.service.js';

app.listen(3000,()=>{
    console.log("server is runnig ");
    
})