'use strict';

module.exports = router => {
  router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
