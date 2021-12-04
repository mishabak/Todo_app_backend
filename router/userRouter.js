const router = require('express').Router()
const helper = require('../helper/helper')

router.get('/postData/:insertedData',helper.insertPostData);
router.get('/fetchData',helper.fetchData)
router.get('/deleteData/:dataId',helper.deleteData)

module.exports = router;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        