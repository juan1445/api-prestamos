const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
// handlebars
const exphbs = require('express-handlebars');


// Initializations
const app = express();
require('./db')
// settings
app.set('port', process.env.PORT || 3002);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

// middlewares
app.use(morgan('dev'));

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(express.json());

// Estatic files
app.use('/public', express.static(path.join(__dirname, './public')));

// routes
app.use('/api/prestamo', require('./routes/deudores'));
app.use('/', require('./routes/requirements'));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/login'));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


//app.get("/api/geeks/:productId", require('./routes/alumnos') );
//api.post("/product", productCtrl.saveProduct);
//api.put("/product/:productId", productCtrl.updateProduct);
//app.delete("/api/geeks/:productId", require('./routes/alumnos'));



