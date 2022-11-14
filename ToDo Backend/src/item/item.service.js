const knexInstance = require('../database/connection');

const Add= async (name)=>{
    const result= await knexInstance("list").insert({ entry:name});
    console.log (result);
    return result
};

const Display=async ()=>{
    const result= await knexInstance("list").select('*').orderBy("id");
    console.log (result);
    return result;
};

const Delete=async (idval)=>{
    const result= await knexInstance("list").where( 'id',idval).del();
    console.log (result);
    return result
};

const Edit=async (id,item)=>{
    const result= await knexInstance("list").where('id',id).update({entry:item});
    console.log (result);
    return result
};


module.exports={Add,Display,Delete,Edit}