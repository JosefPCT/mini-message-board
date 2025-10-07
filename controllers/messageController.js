module.exports = {
  renderNew: (req, res) => {
    res.render('pages/new', { title: 'New Message' });
  }
}