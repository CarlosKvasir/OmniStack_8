module.exports = {
  store(req, res) {
    const { username } = req.body;

    console.log(username);

    return res.json({ ok: true });
  }
};