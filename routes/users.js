var express = require('express');
var router = express.Router();

/* GET users listing. */
//这里的'/' 是users/的根目录下
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// http://127.0.0.1:3000/users/reg
router.get('/reg', function(req, res, next) {
  res.send('这个是注册页面');
});

module.exports = router;
