// const messages = require('../models/messages');
const db = require('../db/queries');

async function renderIndex(req, res){
  const messages = await db.getAllMessages();
  res.render('pages/index', {
    title: 'Homepage',
    messages: messages,
  });
}

module.exports = {
  renderIndex
}