import mongoose from 'mongoose';
import app from './app';

// PORT
const PORT: number = 5000;

//database connection
async function mainServer() {
   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/practice');
      console.log('Databse connection successful');

      app.listen(PORT, () => {
         console.log(`The server running on ${PORT}`);
      })
   } catch (err) {
      console.log(`Database connection failed!!!, ${err}`);
   }
   
};

mainServer();



