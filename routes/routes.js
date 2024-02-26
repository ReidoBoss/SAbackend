module.exports = (app) => {

  const router = require('express').Router();
  const multer = require('multer');
  const storage = multer.memoryStorage(); 
  const upload = multer({ storage: storage });


  const controller = require('../controllers/controllers.js');




//swift aid start

    // GETTERS
  //user image getter
  router.get("/getUserImage/:id", controller.getUserImage);
  // user getters
  router.get("/getUsers", controller.getUsers);
  router.get("/getAdmin", controller.getAdmin);
  router.get("/getOperator", controller.getOperator);
  router.get("/getResponder", controller.getResponder);
  //post getter
  router.get("/getPost", controller.getPost);
  router.get("/getPostReport", controller.getPostReport);

    // POSTERS
    router.post('/addOperator', upload.single('image'), controller.addOperator);
    router.post('/addResponder', upload.single('image'), controller.addResponder);
    router.post('/addPost',upload.single(''), controller.addPost);

    //editors
    router.put('/acknowledgePost/:id', controller.markPostAcknowledged);
    router.put('/denyPost/:id', controller.markPostDenied);





  app.use('/', router);
};
