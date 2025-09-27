const dotenv = require('dotenv')
dotenv.config()

// improtant requires 
const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');


// connection 
const {mongooseConnect} = require('./connection');
const {checkAuth ,restrictToLoginUser } = require('./middleware/auth')

// Routes 
const userRoute = require('./router/user')

const app = express();
const PORT = 8000;

mongooseConnect(process.env.DATABASE).then(()=>{
    console.log("The Database Is Successfully Connected");
}).catch((e)=>{
    console.log("There is some error while connecting the database" , e);
})


// Basic app requirement 
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}));


app.use('/', userRoute )

app.listen(PORT , ()=>{
    console.log("The Database Is Connected On :- " , PORT);
})