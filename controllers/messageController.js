module.exports = {
  renderNew: (req, res) => {
    res.render('pages/new', { title: 'New Message' });
  },
  createMessage: (req, res) => {
    console.log(req.body);

    res.end()
  }
}