import { Sequelize } from 'sequelize'
export let sequelize = new Sequelize('Sequelize3', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})
export let dbConn = async() => {
  return await sequelize.sync({ alter: true }).then((result) => {
        console.log("DB connected ....");
    }).catch((err) => {
        `failed to connect to DB ${err}`
    })
}