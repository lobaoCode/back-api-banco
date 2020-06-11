const User = require('../model/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async store(req, res) {
        const {name, saldo} = req.body;
        const user = await User.create({name, saldo});
        return res.json(user);
    },

    async update(req, res) {
        const id = req.params.id;
        const {name, saldo} = req.body;

        const user = await User.update({name, saldo},{
            where: {id: id}
        });
        return res.json(user)
    }
}