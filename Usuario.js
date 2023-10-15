const Sequelize = require('sequelize');
const sequelize = require('./config');

const Usuario = sequelize.define('usuario', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    idade: {
        type: Sequelize.INTEGER
    }
});

Usuario.sync({ force: true }) // Isso cria a tabela. Use force: true apenas em desenvolvimento.
    .then(() => {
        console.log('Tabela de usuários criada com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao criar tabela:', err);
    });

module.exports = Usuario;
