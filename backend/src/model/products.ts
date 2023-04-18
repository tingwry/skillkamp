import mongoose from "mongoose";

export type Products = mongoose.InferSchemaType<typeof productsSchema>;

const productsSchema = new mongoose.Schema (
    {
        productName: { type: String, required: true },
        imgUrl: { type: String, required: true },
        price: { type: String, required: true },
        onSale: { type: Boolean, required: false }
    }
)

export const ProductsModel = mongoose.model('Products', productsSchema);
