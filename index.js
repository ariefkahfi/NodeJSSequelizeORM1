const Sequelize = require("sequelize");
const sequelize = new Sequelize("s_orm1","arief","123",{
    dialect:"mysql"
});

const PersonModel = sequelize.define("person",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:"person_id"
    },
    name:{
        type:Sequelize.STRING
    }
},{
    timestamps:false,
    tableName:"person"
});

// create a tables Model.sync()
// PersonModel.sync()
//     .then((val)=>{
//         console.log(val);
//     },(err)=>{
//         console.log(err);
//     })

// create new tables , if exists drop it Model.synct({force : true})
// PersonModel.sync({force:true})
//     .then((val)=>{
//         console.log(val);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// create a model instance then save into database
// PersonModel.create({name:"aa1"})
// .then((val)=>{
//     console.log(val);
// },(err)=>{
//     console.log(err);
// });

// findById on model 
// PersonModel.findById(1)
//     .then((person)=>{
//         console.log(`your id : ${person.get('id')}, your name : ${person.getDataValue('name')}`);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// raw query
// sequelize.query("select * from person")
//     .then((val)=>{
//         console.log(val);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
