// const messages = require('../models/messages');
const db = require('../db/queries');
const { body, validationResult, matchedData } = require("express-validator");

const lengthErr = 'must be between 1 to 20 characters';
const emptyErr = 'must not be empty'
const messageLengthErr = 'must have more characters'

const validateUser = [
  body("author").trim()
  .isLength({min: 1, max: 20}).withMessage(`Name ${lengthErr}`),
  body("messageText").trim()
  .notEmpty().withMessage(`Message ${emptyErr}`)
  .isLength({min:5, max:255}).withMessage(`Message ${messageLengthErr}`)
];

// async function createMessage(req, res){
//   await db.insertMessage(req.body.messageText, req.body.author);
//   res.redirect('/');
// }

exports.createMessage = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).render("pages/new", {
        title: 'New Message',
        errors: errors.array(),
      })
    }
    console.log(matchedData(req));
    const { messageText, author } = matchedData(req);
    await db.insertMessage(messageText, author);
    res.redirect('/');
  }
]

exports.renderNew = (req, res) => {
  res.render('pages/new', { title: 'New Message' });
}

// module.exports = {
//   renderNew: (req, res) => {
//     res.render('pages/new', { title: 'New Message' });
//   },
//   // createMessage: (req, res) => {
//   //   // console.log(req.body);
//   //   messages.push({ id: messages.length + 1, text: req.body.messageText, user: req.body.author, added: new Date() });
//   //   res.redirect('/');
//   // }
//   createMessage
// }