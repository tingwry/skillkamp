import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import { connectToDatabase } from "./services/mongoose.service"
import { router } from "./routes/routes"
// import { userRouter } from "./routes/userloginsignup"

async function main() {
    dotenv.config();
    // Create and start express app
        const app = express();
        const port = 4000;

    // Connect mongoose to DB
    // await mongoose.connect(process.env.DB_CONN_STRING!)

    connectToDatabase()
    .then(() => {
        app.use(cors());
        app.use(express.json());

        // app.use(userRouter);
        app.use(router);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
}
main();
