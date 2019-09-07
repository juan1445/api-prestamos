const { Router } = require('express');
const router = require();
const Deudor = require('../models/Deudor');

router.post('/', async (req,res) =>{
    console.log('POST api/deudores');
    console.log(req.body);

    let deudor = new Deudor()
    deudor.nombre = req.body.nombre,
    deudor.apodo = req.body.apodo,
    deudor.celular = req.body.celular,
    deudor.valorPrestamo = req.body.valorPrestamo
    
    deudor.save((err, deudorStored) => {
        if (err) res.status(500).send({message:`Error al guardar en la base de datos: ${err}` })
        res.status(200).send({deudor: deudorStored })
    })
} )

module.exports = router;