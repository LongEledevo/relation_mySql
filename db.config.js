module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "eledevo@123",
    DB: "relation1",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};