import mongoose from "mongoose";

export type Products = mongoose.InferSchemaType<typeof productsSchema>;

const productsSchema = new mongoose.Schema (
    {
        productName: { type: String, required: true },
        imgUrl: { type: String, required: true },
    }
)

export const ProductsModel = mongoose.model('Products', productsSchema);
