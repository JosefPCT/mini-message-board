// const messages = require('../models/messages');
const db = require('../db/queries');

async function renderMessage(req, res){
  let parsedId = parseInt(req.params.id);
  let message = await db.getMessageById(parsedId);
  console.log(message);
  res.render('pages/message', { 
      title: 'Message',
      message: message[0]
  }) 
}

// Used when dealing with local data objects
// const renderMessage = (req, res) => {
//   let parsedId = parseInt(req.params.id);
//   let mes = getMessageById(parsedId);
//   res.render('pages/message', { 
//       title: 'Message',
//       message: mes
//   })  
// }

// Used when dealing with local data objects
// const getMessageById = (id) => {
//   return messages.find((message) => id === message.id);
// }

module.exports = {
  renderMessage
};