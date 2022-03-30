module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,


        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT
        }
    })

    return User

}
