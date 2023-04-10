import { Router } from 'express';
import { Request,Response } from "express";
import { MongooseError } from 'mongoose';
import { ProductsModel } from '../model/products';
// import { TokenPayload } from '../loginsignup/login.post'
// import * as jwt from "jsonwebtoken";

export const router = Router();

// get 1 user
router.get("/products", async (req: Request, res: Response) => {
    const products = await ProductsModel.find().select("productName imgUrl");
    res.status(200).send(products);
});