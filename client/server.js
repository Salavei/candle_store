// const express = require('express')
// const axios = require("axios")
// const cors = require('cors')
// const app = express()
// const port = 4000

// app.use(cors())

// const fetchPrice = async () => {
//     // const res = await axios.post(`https://siteitoverone.herokuapp.com/user_create`,{
//     //     username: "",
//     //     password: "",
//     //     email: ""
//     //   });

//       const res = await axios({
//         method: 'post',
//         url: 'https://siteitoverone.herokuapp.com/user_create',
//         content: {
//             username: '',
//             password: '',
//             email: ""
//         }
//       });
//     return res.data
// }

// console.log(fetchPrice())
// // app.post('/swagger', async (req, res) => {
// //         console.log(req.query)
// //         const data = await fetchPrice();
// //         res.json(data);
// // })

// // app.get('/swagger', async () => {
    
// //     const data = await fetchPrice();
// //     console.log(data)
// // })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })