import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: { //Depois do __dirname está o caminho para o banco de dados
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
}