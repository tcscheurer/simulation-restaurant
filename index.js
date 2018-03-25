require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const massive = require("massive");
const path = require('path')

const port = 5000;

const app = express();


app.use(express.static(`${__dirname}/client/build`));

app.use(json());
const{
    CONNECTION_STRING,
    SESSION_SECRET,
} = process.env;

massive(CONNECTION_STRING).then(db=>app.set('db',db)).catch(err=>console.log(err));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 100000000
    }
}))

require('./routes/routes')(app);


//production
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/client/build/index.html'));
})


app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
