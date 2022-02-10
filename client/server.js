const express = require('express')
const axios = require("axios")
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

const fetchPrice = async ({method}) => {
    const res = await axios (`https://siteitoverone.herokuapp.com/${method}`);
    return res.data
}

app.get('/swagger', async (req, res) => {
        console.log(req.query)
        const {method} = req.query
        const data = await fetchPrice({method});
        res.json(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})