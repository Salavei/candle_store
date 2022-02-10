const express = require('express')
const axios = require("axios")
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

const fetchPrice = async () => {
    const res = await axios (`https://siteitoverone.herokuapp.com/user`);
    return res.data
}

app.get('/swagger', async (req, res) => {
        console.log(req.query)
        const data = await fetchPrice();
        res.json(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})