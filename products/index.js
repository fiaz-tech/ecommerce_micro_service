const express = require('express');

const app = express();


app.use('/', (req, res, next) => {
    return res.status(200).json({"msg": "Hello from Products"})
})

app.listen(8001, () => {
    console.log("Products is listening on PORT 8001")
})