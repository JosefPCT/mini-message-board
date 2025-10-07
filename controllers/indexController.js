const messages = require('../models/messages');

module.exports = {
  renderIndex : (req, res) => {
    res.render('pages/index', { 
        title: 'Homepage', 
        messages: messages 
    });
  }
}