import { Router } from 'express';
import { Request,Response } from "express";
import { MongooseError } from 'mongoose';
import { ProductsModel } from '../model/products';
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