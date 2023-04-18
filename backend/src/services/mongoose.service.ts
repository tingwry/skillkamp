import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import { ProductsModel } from "../model/products";
import { QuestionsModel } from "../model/questions";
import { UsersModel } from "../model/users";
// import { UserModel } from "../model/user";

// Initialize Connection
async function _connectToDatabase() {
  dotenv.config();
  try {
    // Validate environment variables
    if (!process.env.DB_CONN_STRING) {
      throw new Error("Missing DB_CONN_STRING environment variable");
    }
    if (!process.env.DB_NAME) {
      throw new Error("Missing DB_NAME environment variable");
    }

    // Connect to the database
    const connection = await mongoose.connect(process.env.DB_CONN_STRING, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      dbName: process.env.DB_NAME
    });

    // Initialize collections
    const collections = {
      products: ProductsModel,
      questions: QuestionsModel,
      users: UsersModel
    };

    console.log(`Successfully connected to database`);

    return collections;
  } catch (error) {
    console.error(error);
  }
}

export let collections: Awaited<ReturnType<typeof _connectToDatabase>> | undefined = undefined;

export const connectToDatabase = async () => {
  collections = await _connectToDatabase();
}

