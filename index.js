import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})

connectDB().then(() => {
    console.log('The database is connected');
}).catch((e) => {
    console.error("couldn't connect to database", e);

});

app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})
