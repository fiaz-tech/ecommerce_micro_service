const express = require('express');
const dotenv = require('dotenv')
const { errorHandler } = require('./src/middlewares/handleError');
const { notFound } = require('./src/middlewares/notFound');
const connectDB = require('./src/database/connection');
const productRoute = require('./src/api/productRoute');


const app = express();


dotenv.config();

connectDB();



app.use(express.json());
app.use('/api', productRoute);


app.use(notFound);
app.use(errorHandler);



app.listen(8001, () => {
    console.log("Products is listening on PORT 8001")
})