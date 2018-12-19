const bcrypt = require('bcrypt-nodejs');
const uuidv1 = require('uuid/v1');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('Users', {
        id: {
            type: DataTypes.UUIDV1,
            primaryKey: true,
            unique: true,
            allowNull: false,
            defaultValue: uuidv1()
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              notEmpty: true,
              isAlphanumeric: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              notEmpty: true,
              isEmail: true,
            },
        },
        password_hash: {
          type: DataTypes.STRING
        },
        age: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        country: {
          type: DataTypes.STRING,
          allowNull: false
        },
        latitude: {
            type: DataTypes.FLOAT
        },
        longitude: {
            type: DataTypes.FLOAT
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });

    User.beforeCreate((user) =>
        new sequelize.Promise((resolve) => {
            bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
                resolve(hashedPassword);
            });
        }).then((hashedPw) => {
            user.password_hash = hashedPw;
        })
    );
    return User;
}

