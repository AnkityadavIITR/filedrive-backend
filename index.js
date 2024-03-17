import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js"
import postRouter from "./routes/documentRouter.js";
import teamRouter from "./routes/teamRoutes.js"

export const app = express();

app.use(
  cors(
  //   {
  //   origin: ["http://localhost:3000/"],
  //   credentials: true,
  //   methods: ["GET", "POST", "PUT", "DELETE"],
  // }
  )
);

//using the userRouter here from userRoutes
app.use("/user", userRouter);
//using the postRouter form postRoutes in routes
app.use("/posts", postRouter);
app.use("/user/teams",teamRouter)
