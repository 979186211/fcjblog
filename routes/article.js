var express = require('express');
var router = express.Router();

/* GET users listing. */
//这里的'/' article/的根目录下
router.get('/', function(req, res, next) {
  res.send('文章页面');
});

// http://127.0.0.1:3000/users/reg
router.post('/add', function(req, res, next) {
  res.send('加载页面');
});

module.exports = router;
