const express = require('express');
const POST = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const cors = require('cors');
   /* --- API --- */
const loginRouter = require('./router/login');
const userRouter = require('./router/users');
const adminRouter = require('./router/admin');
const registerRouter = require('./router/register');
const otpRouter = require('./router/otp')
const checkinRouter = require('./router/checkin');
const historyController = require('./router/history');
const resetController = require('./router/reset') 
const supperadminController = require('./router/supperadmin');

   /* --- App --- */
const app = express();
   /* --- Cors --- */
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200
}
app.use(cors(corsOptions));
   /* --- use/set --- */
app.set('view engine', 'ejs'); // ejs
app.use(express.json());
app.use(cookieParser());
   /* --- router --- */
app.use('/api',otpRouter);
app.use('/api/login',loginRouter);
app.use('/api/user',userRouter);
app.use('/api/admin',adminRouter);
app.use('/api/register',registerRouter);
app.use('/api/check',checkinRouter)
app.use('/api/history',historyController)
app.use('/api/reset',resetController)
app.use('/api/supperadmin',supperadminController)

   /* --- Post --- */
app.listen(POST, () => {
    console.log(`Server running on port ${POST}`)
})
module.exports = app;
