const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/sign-in', async (req, res) => {
    let user;
   try {
    const {name, password} = req.body;
    user = await User.findOne({ where: {name} });
    if (!user) {
        res.json({message: "Такого челика нет"});
        return;
    }
    if (user.password !== password) {
        res.json({message: "Пароль не совпадает"});
        
    } else {
        res.json({message: "success"});
        res.app.locals.user = user;
        res.app.locals.scores = scores;
    }
   } catch ({message}) { 
    res.json({message})
   }
});

router.post('/sign-up', async (req, res) => {
    let user;
    try {
        const {name, password} = req.body;
        user = await User.findOne({ where: {name} });
        if (user) {
            res.json({ message: 'Такой челик уже есть!!!'});
            return;
        }
        user = await User.create({name, password});
        res.json({ message: 'success'})
       } catch ({message}) { 
        res.json({message})
       }
});

module.exports = router;