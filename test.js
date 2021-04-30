const Sequelize = require('sequelize');
const sequelize = new Sequelize ('test', 'root', 'lo12re34na56@',
{
    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conect")
}).catch(function(erro){
    console.log('Falha' + erro)
});
// modulos para postagem
const Post = sequelize.define('posts', {
    title:{
        type: Sequelize.STRING
    },
    content:{
        type:Sequelize.TEXT
    }
})

Post.sync({force:true});