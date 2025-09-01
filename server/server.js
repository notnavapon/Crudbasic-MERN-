const express = require('express')


const morgan = require('morgan') //ทุกครั้งที่มีการเรียกใช้api จะมีการแสดงผล
const cors = require('cors') // 
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')

const {readdirSync} = require('fs')

//route 2 require
// const prodcutRouters = require('./Routes/product')
// const authRouters = require('./Routes/auth')

const app = express();

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit: '10mb'}))

//route 1
// app.get('/product', (req,res)=>{
//     res.send('Hello endpoint')
// })

// route 2
// app.use('/api',prodcutRouters)
// app.use('/api',authRouters)

readdirSync('./Routes').map((route)=>{ 
    app.use('/api', require('./Routes/' + route))
})


app.listen(5000,()=> {console.log("Server is running on port : 5000")})