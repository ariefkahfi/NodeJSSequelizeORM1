## NodeJS Sequelize ORM


Defining a model 

```
 sequelize.define('modelNameHere',{
    colName1:{
        // attrs here...
    },
    colName2:{
        // attrs here...
    }
})
``` 

Get Model object from ```sequelize.define()```

 ``` 
// create a tables Model.sync() PersonModel.sync()
     .then((val)=>{
         console.log(val);
     },(err)=>{
         console.log(err);
     })
``` 

Create a model instance then save into database 

``` 
PersonModel.create({name:"aa1"})
 .then((val)=>{
     console.log(val);
 },(err)=>{
     console.log(err);
 });
``` 

Raw query examples with replacements ```?``` and ```:key_name``` 

``` 
sequelize.query("select * from person where 
person_id = ?",{
    replacements:["1"]
}).then(()=>{
    return sequelize.query("select * from person where person_id = :p_id",
        {
            replacements:{
                p_id: 2
        }
    })
}).then((val)=>{
    console.log(val);
}).catch(err=>{
    console.log(err);
})
```
