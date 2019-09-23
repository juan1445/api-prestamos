const { Router } = require('express');
const router = Router();
const Deudor = require('../models/Deudor');

router.get('/', async (req, res) => {
    res.render('partials/register')
});

router.post('/register', async (req, res) => {
    let deudor = new Deudor(req.body)

     deudor.save(async (err, deudorStored) => {
         if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
        res.status(200).send({ deudor: deudorStored })
    })

    const deudores = await Deudor.find().sort('-_id');
    res.json(deudores);
    console.log(req.body)
    res.send('Datos guardados')
    
    
    
    // const { nombre, celular, indentificacion, valorPrestamo, correo, contraseña } = req.body;
    // const errors = [];
    // if(nombre <= 0 ){
    //     errors.push({text:'Por favor digite su nombre'})
    // }
    // if(contraseña.length < 4){
    //     errors.push({text: 'La contraseña debe ser al menos de 4 caracteres'})
    // }
    // if(errors.length > 0){
    //     res.render('/register', {errors, nombre, indentificacion, celular, correo, valorPrestamo, contraseña})
    // }else{
    //     res.send('ok')
    // }

    



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