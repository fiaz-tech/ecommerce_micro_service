const express = require('express');

const app = express();



app.use('/', (req, res, next) => {
    return res.status(200).json({"msg": "Hello from Users"})
})



app.listen(8003, () => {
    console.log("Shopping is listening on PORT 8003")
})