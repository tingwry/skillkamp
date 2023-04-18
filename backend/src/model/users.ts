import mongoose from "mongoose";

export type Users = mongoose.InferSchemaType<typeof usersSchema>;

const usersSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        passwordHash: { type: String, required: true },
        cart: { type: [], required: false },

    }
)

export const UsersModel = mongoose.model('Users', usersSchema);