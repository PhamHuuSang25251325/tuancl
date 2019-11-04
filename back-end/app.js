const express= require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const dotenv= require('dotenv');
const bodyParser= require('body-parser');

dotenv.config();
const app= express();

mongoose.connect(process.env.MONGO_URI,{ 
    useNewUrlParser: true,
    useUnifiedTopology : true })
.then(()=>console.log('ok')
).catch(err=>console.log(err)
)

//middlware
app.use(morgan("dev"));  
app.use(bodyParser.json());

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`start at port ${port}`);
    
});