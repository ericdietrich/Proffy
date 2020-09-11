import axios from 'axios';


const api = axios.create({
    //Essa url é retirada do expo, que esta rodando o aplicativo no navegador. Na url se troca exp:// por http:// e a porta pela porta do servidor (3333)
    baseURL: 'http://192.168.0.14:3333'
});

export default api;