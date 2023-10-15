const sequelize = require('./config');
const Usuario = require('./Usuario');

sequelize.authenticate()
    .then(() => {
        console.log('Conexão bem-sucedida com o banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
