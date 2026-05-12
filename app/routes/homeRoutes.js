const express=require('express');
const HomeController = require('../controller/HomeController');

const router=express.Router();



router.get('/',HomeController.index);

router.get('/cards',HomeController.cards);
router.get('/tables',HomeController.tables);
router.get('/blank',HomeController.blank);
router.get('/buttons',HomeController.buttons);
router.get('/login',HomeController.login);
router.get('/error404',HomeController.error404);
router.get('/register',HomeController.register);
router.get('/forgot-password',HomeController.forgot_password);
router.get('/utilitiesAnimation',HomeController.utilitiesAnimation);
router.get('/utilitiesBorder',HomeController.utilitiesBorder);
router.get('/utilitiesColor',HomeController.utilitiesColor);
router.get('/utilitiesOthers',HomeController.utilitiesOthers);
router.get('/charts',HomeController.charts);


module.exports=router;