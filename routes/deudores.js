const { Router } = require('express');
const router = Router();
const Deudor = require('../models/Deudor');

router.get('/', async (req, res) => {
    const deudores = await Deudor.find().sort('-_id');
    res.json(deudores);
});


router.post('/', async (req, res) => {
    console.log('POST api/prestamo');
    console.log(req.body);

    let deudor = new Deudor(req.body)

    deudor.save((err, deudorStored) => {
        if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
        res.status(200).send({ deudor: deudorStored })
    })
})

router.delete('/:productId', async (req, res) => {
    let productId = req.params.productId

    Deudor.findById(productId, (err, deudor) => {
        if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })

        deudor.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })
            res.status(200).send({ message: 'El producto ha sido eliminado' })
        })
    })
})

router.put('/:productId', async (req, res) => {

    let productId = req.params.productId

    let update = req.body

    Deudor.findByIdAndUpdate(productId, update, (err, deudorUpdated)=>{
        if(err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
        res.status(200).send({deudor: deudorUpdated})
    })
})


module.exports = router;