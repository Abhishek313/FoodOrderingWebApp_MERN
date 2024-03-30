import express ,{Request,Response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import myUserRoute from './routes/MyUserRoute'


mongoose.connect(process.env.MONGODB_URI as string)
.then(() => console.log("connected to database!"))
 

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user",myUserRoute)

app.listen(8000,() => {
    console.log(`Server is running on port 8000`);
})