let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/MovieControllers');

router.get('/movies', list); //Whole array
router.get('/movie/:id', show); // Single item
router.post('/movies', create);
// router.put('/movie/:id', update);
router.delete('/movie/:id', remove);
module.exports =  router;