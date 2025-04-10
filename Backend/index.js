const express = require('express');
const cors = require('cors');
const keys = require('./src/config/keys');
const connectDB = require('./src/db/connect');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(cors({
    origin: ['http://localhost:5174'],
    credentials: true
}))
app.use(express.json());

app.use('/api/v1/books', require('./src/books/book.router'));
app.use('/api/v1/orders', require('./src/orders/order.router'));
app.use('/api/v1/auth', require('./src/users/user.router'));
app.use('/api/v1/admin', require('./src/stats/adminStats'));

app.use(express.static(path.join(__dirname,'../Frontend/dist')));
app.get('/{*any}', (req, res) => {
    const indexPath = path.join(__dirname, '../Frontend', 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('Frontend not built. index.html not found.');
    }
});



(async()=>{
    try{
       await connectDB(keys.URL);
       console.log('Connected to MongoDB');
         app.listen(keys.PORT, ()=>{
              console.log(`Server is running on port ${keys.PORT}`);
         });
    }catch(error){
        console.log(error);
    }
})();