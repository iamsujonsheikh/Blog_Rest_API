import app from "./app.js";
import connectDB from "./config/connectDb.js";

const port = process.env.PORT || 8000;

app.listen(port, async () => {
    console.log(`Server is running on ${port}`.bgWhite.black);
    await connectDB();
});