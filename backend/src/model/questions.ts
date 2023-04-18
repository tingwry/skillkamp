import mongoose from "mongoose";

export type Questions = mongoose.InferSchemaType<typeof questionsSchema>;

const questionsSchema = new mongoose.Schema (
    {
        firstName: { type: String, required: false },
        lastName: { type: String, required: false },
        email: { type: String, required: true },
        subject: { type: Boolean, required: false },
        message: { type: String, required: false }
    }
)

export const QuestionsModel = mongoose.model('Questions', questionsSchema);
