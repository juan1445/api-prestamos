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

    deudor.save(async (err, deudorStored) => {
        if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
        res.status(200).send({ deudor: deudorStored })
    })

        const {valorPrestamo, interes} = req.body
        if(valorPrestamo && interes){
            if(valorPrestamo => 200){
                res.send({message: `No te prestamos mas de 200USD`})
            } else{
                res.status(500).send({message: `Listo para el prestamo`})
            }if(interes < 20){
                res.send({message: `No te prestamos a menos del 20%`})
            }else{
                res.status(500).send({message: `Listo para el prestamo`})
            }
        }

})

router.delete('/:productId', async (req, res) => {
    let productId = req.params.productId

    Deudor.findById(productId, (err, deudor) => {
        if (err) res.status(500).send({ message: `Error al borrar el usuario: ${err}` })

        deudor.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el usuario: ${err}` })
            res.status(200).send({ message: 'El Usuario ha sido eliminado' })
        })
    })
})

router.put('/:productId', async (req, res) => {

    let productId = req.params.productId

    let update = req.body

    Deudor.findByIdAndUpdate(productId, update, (err, deudorUpdated)=>{
        if(err) res.status(500).send({message: `Error al borrar el Usuario: ${err}`})

        res.status(200).send({deudor: deudorUpdated})
    })
})


module.exports = router;