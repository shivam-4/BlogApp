import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import { errorHandler, notFound } from "./middlewares/errorMiddlewares.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 8000;
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/users', userRoutes)
app.get('/', (req, res)=>  res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);



app.listen(port, () => console.log(`Server is running at PORT : ${port}`));

