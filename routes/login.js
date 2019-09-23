const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/login', async (req,res) => {

   res.render('partials/login')
});

router.post('/login', async (req,res) => {
    let user = new User(req.body)

    user.save(async (err, userStored) => {
         if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
         res.status(200).send({ user: userStored })
    })
    
    const usuarios = await User.find().sort('-_id');
    res.json(usuarios);
    console.log(req.body)
    res.send('Datos enviados')

    

})

module.exports = router;