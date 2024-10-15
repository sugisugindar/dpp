/*import 'dotenv/config';  // Load environment variables
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
const port = process.env.PORT || 5001;//4000
//const port = 4000
// middleware
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("API Working ")
})
app.listen(port,()=>{
    console.log('Server Started on http://localhost:${port}')
})
// db connection
connectDB();
// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => {
    res.send("API Working");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
*/

import 'dotenv/config';  // Load environment variables
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
const port = process.env.PORT || 5001;
// middleware
app.use(express.json());
app.use(cors());
// db connection
connectDB();
// api endpoints
app.get("/", (req, res) => {
    res.send("API Working");
});
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
