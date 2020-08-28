import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

//cors linka front e back (localhost:3333 e localhost:3000)
app.use(cors());
//Permite que o corpo da requisição consiga ser interpretado como Json. Caso contrário, o retorno de request.body seria undefined
app.use(express.json());
app.use(routes);



//Exemplo: www.minhaapi.com.br:3333
//No caso: localhost:3333/users

app.listen(3333);

