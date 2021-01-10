const router=require('express').Router;
const controller=require('./controller');

router.get('/saveuser',controller.saveUser);
router.get('/removeuser',controller.removeUser);

module.exports=router;

