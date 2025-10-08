const messages = require('../models/messages');

const renderMessage = (req, res) => {
  let parsedId = parseInt(req.params.id);
  let mes = getMessageById(parsedId);
  res.render('pages/message', { 
      title: 'Message',
      message: mes
  })  
}

const getMessageById = (id) => {
  return messages.find((message) => id === message.id);
}

module.exports = {
  renderMessage
};