module.exports = {
  renderIndex : (req, res) => {
    res.render('pages/index', { title: 'Homepage' });
  }
}