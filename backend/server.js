const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(cors());
app.use(express.json());

//Conexión
mongoose.connect('mongodb://localhost:27017/techconnet')

.then(() => {
    console.log('Conectado a MongoDB');
})
.catch (err => console.error('Error al conectar a MongoDB', err));

//posibles rutas
app.use('/categoria', categoriaRutas);
app.use('/producto', productoRutas);
app.use('/compra', compraRutas);
app.use('/cliente', clienteRutas);

//iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});