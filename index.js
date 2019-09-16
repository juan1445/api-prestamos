const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initializations
const app = express();
require('./db')
// settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(morgan('dev'));
app.use(cors());
 
app.use(express.json());
// routes
app.use('/api/prestamo', require('./routes/deudores'));

//app.get("/api/geeks/:productId", require('./routes/alumnos') );
//api.post("/product", productCtrl.saveProduct);
//api.put("/product/:productId", productCtrl.updateProduct);
//app.delete("/api/geeks/:productId", require('./routes/alumnos'));



// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});



