module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        userId: {
            type: DataTypes.INTEGER

        },
        bookId: {
            type: DataTypes.INTEGER

        },
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Review

}
