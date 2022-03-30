module.exports = (sequelize, DataTypes) => {

    const Book = sequelize.define("book", {
        bookId: {
            type: DataTypes.INTEGER

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        }
    
    })

    return Book

}
