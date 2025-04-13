import express from "express";
import cors from "cors";
import compaignRoutes from "./routes/campaignRoutes";
import messageRoutes from "./routes/messageRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/campaigns", compaignRoutes);
app.use("/personalized-message", messageRoutes);

export default app;
