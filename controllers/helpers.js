const messages = require('../models/messages');



module.exports = {
//   renderMessage: (req ,res) => {
//     // console.log(req.params.ids);
//     // console.log(messages.find((message) => req.params.id === message.id));
//     let parsedId = parseInt(req.params.id);
//     console.log(parsedId);
//     console.log(typeof parsedId);
//     let mes = messages.find((message) => {
//         // console.log(typeof req.params.id);
//         // console.log(typeof message.id);
//         // let parsedId = parseInt(req.params.id);
//         // console.log(parsedId);
//         // console.log(message.id);

//         return parsedId === message.id;
//     });
//     console.log(mes);
//   },

  renderMessage: (req ,res) => {
    let parsedId = parseInt(req.params.id);
    let mes = messages.find((message) => {

        return parsedId === message.id;
    });
    res.render('pages/message', { 
        title: 'Message',
        message: mes
    })
  },

  // getMessageById: (id) => {
  //   // return messages.find((message) => id === message.id);
  //   console.log(messages.find((message) => id === message.id));
  // }
};