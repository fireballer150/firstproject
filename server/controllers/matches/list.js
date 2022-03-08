const { matches } = require('../../models')
module.exports = (req, res) => {
    res.json(matches)
}