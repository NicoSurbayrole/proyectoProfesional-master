const {Model,DataTypes} = require("sequelize")
const db = require("../config/db");
const bcrypt = require("bcrypt");

class Users extends Model{
    hash(password,salt){
        return bcrypt.hash(password,salt);
    }
    setSuperadmin(){
        Users.update({rol: "superadmin" },{
            where: { id: 1 }
        })
    }
}

Users.init(
    {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                min:8
            },
        },
        salt:{
            type: DataTypes.STRING,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        rol:{
            type: DataTypes.STRING,
            defaultValue: "user",
        },
    },
{sequelize:db, modelName:"users"});

Users.afterCreate(async (user) =>{
    const id = user.id;
    if(id === 1) user.setSuperadmin();
});

Users.beforeCreate(async (user)=>{
    const salt = await bcrypt.genSalt(1);
    const hash = await user.hash(user.password,salt);
    user.salt = salt;
    user.password = hash;
});

module.exports = Users;