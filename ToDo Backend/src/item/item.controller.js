const {Display,Add,Delete,Edit}=require('./item.service');

const read=async (req,res,next)=>{
    const name=req.body.text;
    const foundNote=await Add(name);
    res.json({data:foundNote});
};

const readall=async (req,res,next)=>{
    const foundNote=await Display();
    res.json({data:foundNote});

};

const rem=async (req,res,next)=>{
    const idval=req.body.text;
    const foundNote=await Delete(idval);
    res.json({data:foundNote});
    
};

const edit=async (req,res,next)=>{
    const id=req.body.id;
    const item=req.body.text;
    const foundNote=await Edit(id,item);
    res.json('edited successfully');
};


module.exports={read,readall,rem,edit};