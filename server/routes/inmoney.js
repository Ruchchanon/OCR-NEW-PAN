const express = require('express');
const router = express.Router();
const { authCheck } = require('../middleware/auth')

const { create,
        list, 
        read, 
        update, 
        remove
     
} = require('../controllers/inmoney');
const { uploadFile } = require('../middleware/uploadfile')

//@route    localhost:5000/api/event
//@method   POST
//@access   Public
router.get('/inmoney', authCheck, list);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.get('/inmoney/:id', authCheck, read);

//@route    localhost:5000/api/event
//@method   GET
//@access   Public
router.post('/inmoney', authCheck, uploadFile , create);

//@route    localhost:5000/api/event
//@method   PUT
//@access   Public
router.put('/inmoney/:id', authCheck, update);
//@route    localhost:5000/api/event
//@method   DELETE
//@access   Public
router.delete('/inmoney/:id', authCheck, remove);
module.exports = router;