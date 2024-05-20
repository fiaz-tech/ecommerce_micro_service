const express = require('express');

const app = express();



app.use('/', (req, res, next) => {
    return res.status(200).json({"msg": "Hello from Shopping"})
})




app.listen(8002, () => {
    console.log("Shopping is listening on PORT 8002")
})