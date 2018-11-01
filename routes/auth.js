const express = require('express');
const router = express.Router();


router.post('/signup',(req,res,next)=>{
  //signup call, may be controller from here
});
router.post('/login', (req, res,next) => {
    //login call, may be controller from here
});

module.exports = router;
