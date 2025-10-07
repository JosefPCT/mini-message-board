const messages = require('../models/messages');

module.exports = {
  renderNew: (req, res) => {
    res.render('pages/new', { title: 'New Message' });
  },
  createMessage: (req, res) => {
    // console.log(req.body);
    messages.push({ text: req.body.messageText, user: req.body.author, added: new Date() });
    res.redirect('/');
  }
}