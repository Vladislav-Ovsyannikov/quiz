const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/sign-in', async (req, res) => {
   try {
    const {name, password} = req.body;
    console.log(name, password);
   } catch ({message}) { 
    res.json({message})
   }
});

router.post('/sign-up', async (req, res) => {
    try {
        let user;
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