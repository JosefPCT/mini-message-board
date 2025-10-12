// const messages = require('../models/messages');
const db = require('../db/queries');

async function createMessage(req, res){
  await db.insertMessage(req.body.messageText, req.body.author);
  res.redirect('/');
}

module.exports = {
  renderNew: (req, res) => {
    res.render('pages/new', { title: 'New Message' });
  },
  // createMessage: (req, res) => {
  //   // console.log(req.body);
  //   messages.push({ id: messages.length + 1, text: req.body.messageText, user: req.body.author, added: new Date() });
  //   res.redirect('/');
  // }
  createMessage
}