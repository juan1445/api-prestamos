const mongoose = require('mongoose');


const URL = {
    mongoAtlas: "mongodb+srv://Juan:Juan1445$@cluster0-j2ivx.mongodb.net/test?retryWrites=true&w=majority",
    //mongoLocal: "mongodb://localhost/dbprueba"
}


mongoose.connect(URL.mongoAtlas, {
    useNewUrlParser: true
})

.then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));