import { Router } from 'express';
import { Request,Response } from "express";
import { CallbackError, MongooseError } from 'mongoose';
import { ProductsModel } from '../model/products';
import { QuestionsModel } from '../model/questions';
// import { TokenPayload } from '../loginsignup/login.post'
// import * as jwt from "jsonwebtoken";

export const router = Router();

// get all products
router.get("/products", async (req: Request, res: Response) => {
    try{
        const products = await ProductsModel.find();
        
        res.status(200).send(products);
    } catch (error) {
        if (error instanceof MongooseError){
            res.status(500).send(error.message);
            return;
        }     
        else{
            res.status(500).send("unknown error");
            return;
        }
    }
});

// get 1 product
router.get("/products/:productName", async (req: Request, res: Response) => {
    const name = req?.params?.productName;
    const product = await ProductsModel.findOne({ productName: name });
    res.status(200).send(product);
});

// get all quesitons
router.get("/questions", async (req: Request, res: Response) => {
    try{
        const questions = await QuestionsModel.find();
        
        res.status(200).send(questions);
    } catch (error) {
        if (error instanceof MongooseError){
            res.status(500).send(error.message);
            return;
        }     
        else{
            res.status(500).send("unknown error");
            return;
        }
    }
});

// post question
router.post("/questions", async (req: Request, res: Response) => {
    const { firstName, lastName, email, subject, message } = req.body;
    
    // Validate input
    if (!email) {
        return res.status(400).json({ message: "`email` is required" });
    }
    
    const newQuestion = new QuestionsModel({
        firstName,
        lastName,
        email,
        subject,
        message
    });

    try {
        await newQuestion.save();
        return res.status(201).json({ message: "Question submitted!" });
      } catch (err) {
        console.log(err);
        return res
          .status(401)
          .json({ error: "Error submitting question, please try again." });
      }
});