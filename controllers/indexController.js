module.exports = {
  renderPage : (req, res) => {
    res.render('pages/index', { title: 'Homepage' });
  }
}