const express =require("express")

const router=express.Router();
const {read,readall,rem,edit} =require('./item.controller.js');

router.route('/add').post(read)
router.route('/item').get(readall)
router.route('/remove').delete(rem)
router.route('/edit').post(edit)
module.exports=router;