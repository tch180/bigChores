const express = require('express');
const connectDb = require('./config/db');
//const routes = require('./routes') to fix deprecated warning. 


const app = express();

//dbconnection
connectDb();

//middleware
app.use(express.json({extended:false}))

//NGROK
const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect();
})();


//Routes
app.use('/api/users', require('./routes/users')) // checked and working
app.use('/api/child', require('./routes/child'))// checked and working. 
app.use('/api/chore', require('./routes/chore')) // Need to add child ID to assign chore to child
app.use('/api/auth', require('./routes/auth')) // checked and working
//app.use('/api/childLogin', require('./routes/childLogin'))




//PORT 
const PORT = process.env.PORT || 1109

app.listen(PORT, () => console.log(` 🌎 Server is up and running on ${PORT}`)) 






