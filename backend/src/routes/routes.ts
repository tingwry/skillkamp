import { Router } from 'express';
import { Request,Response } from "express";
import { MongooseError } from 'mongoose';
import { ProductsModel } from '../model/products';
// import { TokenPayload } from '../loginsignup/login.post'
// import * as jwt from "jsonwebtoken";

export const router = Router();

// get all products
router.get("/products", async (req: Request, res: Response) => {
    const products = await ProductsModel.find().select("productName imgUrl");
    res.status(200).send(products);
});

// get 1 product
router.get("/products/:productName", async (req: Request, res: Response) => {
    const name = req?.params?.productName;
    const product = await ProductsModel.findOne({ productName: name });
    res.status(200).send(product);
});